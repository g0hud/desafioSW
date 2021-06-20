const planetService = require("../services/planet");

class PlanetController {
  async index(req, res) {
    const planets = await planetService.getPlanetList();

    return res.json(planets);
  }

  async getPlanet(req, res) {
    const planet = req.params.id;
    const planetData = await planetService.getPlanet(planet);

    return res.json(planetData);
  }

  async storePlanet(req, res) {
    const planet = req.body.planet;
    const valid = await planetService.savePlanet(planet);
    return res.json(valid);
  }

  async updatePlanet(req, res) {}

  async destroyPlanet(req, res) {
    const planetID = req.params.id;
    const destroied = await planetService.destroyPlanet(planetID);

    return res.status(204).json(destroied);
  }
}

module.exports = new PlanetController();
