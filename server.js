const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const volleyball = require("volleyball");
const cors = require("cors");
const path = require("path");

// middlewares
app.use(cors());
app.use(express.json());
app.use(volleyball);

// routes
// read static files
app.use("/api/v1/auth", require("./Routes/auth"));
app.use("/api/v1/notes", require("./Routes/notes"));

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// connection
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
