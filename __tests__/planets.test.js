import Planet from "../src/js/planets.js";

describe("Planet", () => {
  test("should instantiate a planet object with 2 keys", () => {
    const planetAge = new Planet(5);
    expect(planetAge.age).toEqual(5);
    expect(planetAge.expec).toEqual(72);
  });

  test("should return a string giving the user's age on Mercury", () => {
    const mercury = new Planet(29);
    expect(mercury.mercuryAge()).toEqual("You are 120.8 years old on Mercury!");
  });

  test("should return a string giving the years a user has left to live on Mercury", () => {
    const mercury = new Planet(29);
    expect(mercury.mercuryExp()).toEqual("You have 179.2 years left to live on Mercury!");
    
  });
});
