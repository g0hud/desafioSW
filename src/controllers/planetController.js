const planetService = require("../services/planet");

class PlanetController {
  async index(req, res) {
    const planets = await planetService.getPlanetList();

    if (planets) {
      return res.status(200).json(planets);
    }
    return res.status(400).json({ message: "That's no moon." });
  }

  async getPlanet(req, res) {
    const planet = req.params.id;
    const planetData = await planetService.getPlanet(planet);

    if (planetData) {
      return res.status(200).json(planetData);
    }
    return res
      .status(404)
      .json({ message: "Are something wrong with the planet." });
  }

  async storePlanet(req, res) {
    const planet = req.body.planet;

    const valid = await planetService.savePlanet(planet);

    if (valid) {
      return res.status(201).json({
        id: valid.id,
        name: valid.name,
        climate: valid.climate,
        terrain: valid.terrain,
        films: valid.films,
      });
    }
    return res
      .status(400)
      .json({ message: "Wait. Oh My! I can't find this planet." });
  }

  async destroyPlanet(req, res) {
    const planetID = req.params.id;
    const destroyed = await planetService.destroyPlanet(planetID);

    if (destroyed) {
      return res.status(200).json({ message: "Has been destroyed!" });
    }
    return res
      .status(400)
      .json({ message: "Sorry, I can't blow this planet up!" });
  }
}

module.exports = new PlanetController();
