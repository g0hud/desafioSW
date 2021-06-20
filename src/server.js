const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

const planetRoutes = require("./routes/planetRoutes");

const app = express();

app.use(express.json());

app.use("/v1", planetRoutes);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Server on @ http://localhost:${port}/v1/planet`);
});
