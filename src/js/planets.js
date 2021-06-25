export default class Planet {
  constructor(age) {
    this.age = age;
    this.expec = 72;
  }
  mercuryAge() {
    let mercAge = parseFloat((this.age / 0.24).toFixed(1));
    return `You are ${mercAge} years old on Mercury!`;
  }
}
