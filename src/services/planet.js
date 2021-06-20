const Planet = require("../models/planetModel");
const SWPlanet = require("./SWPlanet");

class getOrSave {
  async getPlanetList() {
    const listPlanets = await Planet.find({});

    if (listPlanets.length === 1) {
      const planetObj1 = {
        id: listPlanets[0]._id,
        name: listPlanets[0].name,
        climate: listPlanets[0].climate,
        terrain: listPlanets[0].terrain,
        films: listPlanets[0].films,
      };

      return planetObj1;
    } else if (listPlanets.length >= 2) {
      const planetArr = [];

      for (let planet of listPlanets) {
        const planetObj = {
          id: planet._id,
          nome: planet.name,
          clima: planet.climate,
          terreno: planet.terrain,
        };

        planetArr.push(planetObj);
      }

      return planetArr;
    } else return null;
  }

  async getPlanet(planetNameOrID) {
    try {
      var valid = false;
      const planetData = await Planet.find({ name: planetNameOrID }).exec();

      if (planetData[0]) {
        valid = true;
        return planetData[0];
      } else if (valid) {
        const planetByID = await Planet.findById(planetNameOrID).exec();
        return planetByID[0];
      }
      return null;
    } catch (err) {
      console.log(err);
    }
  }

  async savePlanet(planetObj) {
    const testGetPlanet = await this.getPlanet(planetObj.name);

    if (testGetPlanet) {
      return null;
    }

    const validateSW = await SWPlanet.getPlanet(planetObj.name);

    if (validateSW) {
      const planetData = {
        name: planetObj.name,
        climate: planetObj.climate,
        terrain: planetObj.terrain,
        films: validateSW.films.length,
      };

      const planet = await Planet.create(planetData);

      return planet;
    }
    return null;
  }

  async destroyPlanet(planetObj) {
    const planetByID = await Planet.findByIdAndDelete(planetObj).exec();
    return planetByID;
  }
}

module.exports = new getOrSave();
