const router = require("express").Router();

const planet = require("../controllers/planetController");

router.get("/", planet.index);
router.get("/:id", planet.getPlanet);
router.post("/", planet.storePlanet);
router.put("/:id", planet.updatePlanet);
router.delete("/:id", planet.destroyPlanet);
