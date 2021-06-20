const axios = require("axios");

test("should save planets", async () => {
  jest.setTimeout(async () => {
    const planetOne = {
      name: "Tatooine",
      climate: "arid",
      terrain: "desert",
    };
    const js = {
      url: "http://localhost:3502/v1/planet",
      method: "POST",
      data: {
        planet: planetOne,
      },
    };

    const response = await axios(js);

    expect(response.status).toBe(201);
  }, 1000);
});

test("should find planets", async () => {
  jest.setTimeout(async () => {
    const response = await axios({
      url: "http://localhost:3502/v1/planet",
      method: "GET",
    });

    expect(response.status).toBe(200);
  }, 500);
});

test("should delete planets", async () => {
  jest.setTimeout(async () => {
    const getPlanet = await axios({
      url: "http://localhost:3502/v1/planet",
      method: "GET",
    });

    const response = await axios({
      url: `http://localhost:3502/v1/planet/${getPlanet.data.id}`,
      method: "DELETE",
    });

    expect(response.status).toBe(204);
  }, 1000);
});
