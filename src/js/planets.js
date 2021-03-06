export default class Planet {

  constructor(age) {
    this.age = age;
    this.expec = 72;
  }

  mercuryAge() {
    let mercuryAge = parseFloat((this.age / 0.24).toFixed(1));
    return `You are ${mercuryAge} years old on Mercury!`;
  }

  mercuryExp() {
    let mercuryAge = parseFloat((this.age / .24).toFixed(1));
    let mercuryExp = parseFloat((this.expec / .24).toFixed(1));
    if (mercuryAge < mercuryExp) {
      return `You have ${(mercuryExp - mercuryAge).toFixed(1)} (Mercury) years left to live on Mercury!`;
    } else {
      return `You have exceeded your Mercury life expectancy by ${Math.abs((mercuryExp - mercuryAge).toFixed(1))} (Mercury) years! **Gulp!`;
    }
  }

  venusAge() {
    let venusAge = parseFloat((this.age / .62).toFixed(1));
    return `You are ${venusAge} years old on Venus!`;
  }

  venusExp() {
    let venusAge = parseFloat((this.age / .62).toFixed(1));
    let venusExp = parseFloat((this.expec / .62).toFixed(1));
    if (venusAge < venusExp) {
      return `You have ${(venusExp - venusAge).toFixed(1)} (Venus) years left to live on Venus!`;
    } else {
      return `You have exceeded your Venus life expectancy by ${Math.abs((venusExp - venusAge).toFixed(1))} (Venus) years! **Gulp!`;
    }
  }
  marsAge() {
    let marsAge = parseFloat((this.age / 1.88).toFixed(1));
    return `You are ${marsAge} years old on Mars!`;
  }

  marsExp() {
    let marsAge = parseFloat((this.age / 1.88).toFixed(1));
    let marsExp = parseFloat((this.expec / 1.88).toFixed(1));
    if (marsAge < marsExp) {
      return `You have ${(marsExp - marsAge).toFixed(1)} (Mars) years left to live on Mars!`;
    } else {
      return `You have exceeded your Mars life expectancy by ${Math.abs((marsExp - marsAge).toFixed(1))} (Mars) years! **Gulp!`;
    }
  }

  jupiterAge() {
    let jupiterAge = parseFloat((this.age / 11.86).toFixed(1));
    return `You are ${jupiterAge} years old on Jupiter!`;
  }

  jupiterExp() {
    let jupiterAge = parseFloat((this.age / 11.86).toFixed(1));
    let jupiterExp = parseFloat((this.expec / 11.86).toFixed(1));
    if (jupiterAge < jupiterExp) {
      return `You have ${(jupiterExp - jupiterAge).toFixed(1)} (Jupiter) years left to live on Jupiter!`;
    } else {
      return `You have exceeded your Jupiter life expectancy by ${Math.abs((jupiterExp - jupiterAge).toFixed(1))} (Jupiter) years! **Gulp!`;
    }
  }
}