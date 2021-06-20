const express = require("express");
const router = express.Router();

const planet = require("../controllers/planetController");

router.get("/planet/", planet.index);
router.get("/planet/:id", planet.getPlanet);
router.post("/planet/", planet.storePlanet);
router.put("/planet/:id", planet.updatePlanet);
router.delete("/planet/:id", planet.destroyPlanet);

module.exports = router;
