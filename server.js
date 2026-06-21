const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let messages = [];

app.post("/contact", (req, res) => {
    messages.push(req.body);
    console.log("Message received:", req.body);
    res.send("Message saved successfully!");
});

app.get("/messages", (req, res) => {
    res.json(messages);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});