from flask import Flask,request,jsonify
from sentiment import get_sentiment
from flask_cors import CORS
app = Flask(__name__)
CORS(app, origins="http://localhost:5173")

@app.route("/analyze", methods=["POST"])
def analyze():
    data=request.json
    message=data.get("text")
    if not message:
        return jsonify({"error": "No text provided"}),400
    result=get_sentiment(message)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

