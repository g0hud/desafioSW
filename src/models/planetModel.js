const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  films: {
    type: Number,
  },
  climate: {
    type: String,
    required: true,
  },
  terrain: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Planet", PlanetSchema);
