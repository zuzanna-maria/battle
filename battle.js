class Battle {

  constructor() {
    this.players = []
    this.poisoned =[false,false]
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
    this.ispoisoned()
  }

  riskturn() {
    this.otherPlayer().takerandomDamage()
    this.ispoisoned()
  }

  paraturn() {
    this.otherPlayer(). takeparalysisDamage()
    this.ispoisoned()
  }

  poisonturn() {
    this.otherPlayer(). takepoisonDamage()
    if(Math.random() > 0.5){
      this.poisoned[1] = true
    }
    this.ispoisoned()
  } 

  sleepturn() {
    this.otherPlayer(). takesleepDamage()
    this.ispoisoned()
  }

  healturn() {
    this.currentPlayer(). healDamage()
    this.ispoisoned()
    this.poisoned[0] = false
  }
  ispoisoned(){
    if(this.poisoned[1]){
    this.otherPlayer. takepoisonedDamage()
    }
  }

}

module.exports = Battle;
