class Battle {

  constructor() {
    this.players = []
  }

  add(player) {
    this.players.push(player)
  }

  currentPlayer() {
    return this.players[0]
  }

  otherPlayer() {
    return this.players[1]
  }

  switch() {
    this.players = this.players.reverse()
  }

  turn() {
    this.otherPlayer().takeDamage()
  }

}

module.exports = Battle;
