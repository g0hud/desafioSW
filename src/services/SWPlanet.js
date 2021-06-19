const axios = require("axios");

class Planet {
  async getPlanet(planetName) {
    try {
      var atualPlanet = "https://swapi.dev/api/planets/?page=1&format=json";

      while (atualPlanet !== null) {
        const js = {
          url: atualPlanet,
          method: "GET",
        };

        const { data } = await axios(js);

        atualPlanet = data.next;

        for (let planet of data.results) {
          if (planetName === planet.name) {
            return planet;
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new Planet();
