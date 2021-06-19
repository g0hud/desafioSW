const express = require("express");

const planetRoutes = require("./routes/planetRoutes");

const app = express();

require("dotenv");

app.use(express.json());

app.use("/v1", planetRoutes);

const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Server on @ https://localhost:${port}/`);
});
