import Planet from "../src/js/planets.js";

describe("Planet", () => {
  test("should instantiate a planet object with 2 keys", () => {
    const planetAge = new Planet(5);
    expect(planetAge.age).toEqual(5);
    expect(planetAge.expec).toEqual(72);
  });
});
