from flask import *
from pymongo import *

app = Flask(__name__)

try:
    client = MongoClient(host="localhost", port=27017, serverSelectionTimeoutMS=1000)
    # client = MongoClient(
    #     "mongodb+srv://Nathan:IamNathan@wheretocharge.6gnsnno.mongodb.net/"
    # )
    # client.server_info()
    # db = client["WhereToCharge"]
    # # collections = db["WhereToCharge"]
except:
    print("ERROR - Cannot connect to DB")

# Marker API Route
@app.route("/markers", methods=["GET"])
def get_markers():
    try:
        data = db.user.find()
        return data
    except Exception as ex:
        print(ex)
        return Response(
            response=json.dumps({"message": "cannot read markers from db"}),
            status=500,
            mimetype="application/json",
        )


if __name__ == "__main__":
    app.run(debug=True)
