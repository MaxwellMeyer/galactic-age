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
    expect(mercury.mercuryExp()).toEqual("You have 179.2 (Mercury) years left to live on Mercury!");
  });

  test("should return a string telling a user how many years they have exceeded their life expectancy by, in that planet's years.", () => {
    const mercuryOld = new Planet(99);
    expect(mercuryOld.mercuryExp()).toEqual("You have exceeded your Mercury life expectancy by 112.5 (Mercury) years! **Gulp!");
  });

  test("should return a string giving the user's age on Venus", () => {
    const venus = new Planet(29);
    expect(venus.venusAge()).toEqual("You are 46.8 years old on Venus!")
  });

  test("should return a string giving the years a user has left to live on Venus", () => {
    const venus = new Planet(29);
    expect(venus.venusExp()).toEqual("You have 69.3 (Venus) years left to live on Venus!");
  });

  test("should return a string telling a user how many years they have exceeded their life expectancy by, in that planet's years.", () => {
    const venusOld = new Planet(99);
    expect(venusOld.venusExp()).toEqual("You have exceeded your Venus life expectancy by 43.6 (Venus) years! **Gulp!");
  });

 

});
