const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const FLASK_BACKEND = process.env.FLASK_BACKEND || "http://localhost:5000";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", async (req, res) => {
    try {
        const response = await fetch(`${FLASK_BACKEND}/submittodoitem`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemName: req.body.itemName,
                itemDescription: req.body.itemDescription
            })
        });

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error("Error communicating with Flask:", error);

        res.status(500).json({
            success: false,
            message: "Unable to connect to Flask backend"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express frontend running on port ${PORT}`);
    console.log(`Flask backend: ${FLASK_BACKEND}`);
});