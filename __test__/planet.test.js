const axios = require("axios");

test("should not save planet", async () => {
  jest.setTimeout(async () => {
    const planetOne = {
      name: "Terra",
      climate: "Cool",
      terrain: "Flat",
    };
    const js = {
      url: "http://localhost:3502/v1/planet",
      method: "POST",
      data: {
        planet: planetOne,
      },
    };

    const response = await axios(js);

    expect(response.status).toBe(400);
  }, 1000);
});

test("should save planet", async () => {
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

test("should not find planets list", async () => {
  jest.setTimeout(async () => {
    const response = await axios({
      url: "http://localhost:3502/v1/planet",
      method: "GET",
    });

    expect(response.status).toBe(400);
  }, 500);
});

test("should not find planet by name", async () => {
  jest.setTimeout(async () => {
    const response = await axios({
      url: "http://localhost:3502/v1/planet/Terra",
      method: "GET",
    });

    expect(response.status).toBe(400);
  }, 500);
});

test("should find planet", async () => {
  jest.setTimeout(async () => {
    const response = await axios({
      url: "http://localhost:3502/v1/planet",
      method: "GET",
    });

    expect(response.status).toBe(200);
  }, 500);
});

test("should not delete planet", async () => {
  jest.setTimeout(async () => {
    const response = await axios({
      url: `http://localhost:3502/v1/planet/Terra`,
      method: "DELETE",
    });

    expect(response.status).toBe(400);
  }, 1000);
});

test("should find one planet", async () => {
  jest.setTimeout(async () => {
    const getPlanet = await axios({
      url: "http://localhost:3502/v1/planet",
      method: "GET",
    });

    const response = await axios({
      url: `http://localhost:3502/v1/planet/${getPlanet.data.id}`,
      method: "GET",
    });

    expect(response.status).toBe(200);
  }, 1000);
});

test("should delete planet", async () => {
  jest.setTimeout(async () => {
    const getPlanet = await axios({
      url: "http://localhost:3502/v1/planet",
      method: "GET",
    });

    const response = await axios({
      url: `http://localhost:3502/v1/planet/${getPlanet.data.id}`,
      method: "DELETE",
    });

    expect(response.status).toBe(200);
  }, 1000);
});
