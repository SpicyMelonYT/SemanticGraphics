from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/connection', methods=['POST'])
def handle_value():
    data = request.get_json(force=True)
    original_value = float(data['value'])
    new_value = original_value + 1
    print(new_value, flush=True)
    return jsonify({'newValue': new_value}), 200


if __name__ == '__main__':
    app.run(debug=True, port=5005)
