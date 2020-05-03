const express = require("express");
const path = require("path");

const app = express();

app.get("/", async (req, res) => {
  res.send("hello world");
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
