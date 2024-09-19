const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post("/api/save-token", (req, res) => {
    const { name, token } = req.body;
    console.log(`Received token for ${name}: ${token}`);

    res.status(200).send({ message: "Token saved successfully" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
