from flask import Flask
from flask_cors import CORS, cross_origin
import requests


app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET'])
def get_data():
    #r = requests.get("http://ergast.com/api/f1/current/last/results.json")
    r = {"a":"b1"}

    return r


# Running app
if __name__ == '__main__':
    app.run(debug=True) # port might be wrong