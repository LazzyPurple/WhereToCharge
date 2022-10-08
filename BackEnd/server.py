from flask import Flask

app = Flask(__name__)

# Marker API Route
@app.route("/markers")
def markers():
    return {"markers": ["marker 1", "marker 2", "marker3"]}


if __name__ == "__main__":
    app.run(debug=True)
