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
  }
