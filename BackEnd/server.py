from flask import *
from pymongo import *

app = Flask(__name__)

try:
    mongo = MongoClient(host="localhost", port=27017, serverSelectionTimeoutMS=1000)
    mongo.server_info()
    db = mongo.WhereCharge
except:
    print("ERROR - Cannot connect to DB")

# Marker API Route
@app.route("/markers", methods=["POST"])
def create_markers():
    try:
        marker = {"name": "A", "longitude": "2.397822", "latitude": "48.839947"}
        dbResponse = db.markers.insert_one(marker)
        for attr in dir(dbResponse):
            print(attr)
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "operation can not be done"}),
            status=500,
            mimetype="application/json",
        )


@app.route("/markers", methods=["GET"])
def get_markers():
    try:
        data = list(db.markers.find())
        return data
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "cannot read markers from db"}),
            status=500,
            mimetype="application/json",
        )


@app.route("/markers", methods=["GET"])
def update_marker(id):
    try:
        dbResponse = db.markers.update_one(
            {"_id": ObjectId(id)}, {"set": {"name": request.form["name"]}}
        )
    except:
        print("...........")


if __name__ == "__main__":
    app.run(debug=True)
