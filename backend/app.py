from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Flask backend is running successfully"
    })


@app.route("/submittodoitem", methods=["POST"])
def submit_todo_item():
    data = request.get_json()

    item_name = data.get("itemName")
    item_description = data.get("itemDescription")

    if not item_name or not item_description:
        return jsonify({
            "success": False,
            "message": "Both item name and item description are required"
        }), 400

    print("Received item:")
    print("Item Name:", item_name)
    print("Item Description:", item_description)

    return jsonify({
        "success": True,
        "message": "Data submitted successfully",
        "itemName": item_name,
        "itemDescription": item_description
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)