class Player {

  constructor(name) {
    this.name = name;
    this.health = 50;
  }

  takeDamage() {
    this.health = this.health - 10;
  }

}

module.exports = Player;
