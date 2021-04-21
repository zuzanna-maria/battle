class Player {

  constructor(name) {
    this.name = name;
    this.health = 50;
  }

  takeDamage() {
    if(typeof(this.health) === 'number' ){
    this.health = this.health - 10;
    }
    if(this.health <= 0){
      this.health = 'hit points have been reduced to 0 the game is lost'
    }
  }
  takerandomDamage() {
    if(typeof(this.health) === 'number' ){
    this.health  -= Math.floor(Math.random()* 21);
    }
    if(this.health <= 0){
      this.health = 'hit points have been reduced to 0 the game is lost'
    }
  }

  takeparalysisDamage() {
    if(typeof(this.health) === 'number' ){
    this.health = this.health - 5;
    }
    if(this.health <= 0){
      this.health = 'hit points have been reduced to 0 the game is lost'
    }
  }

  takepoisonDamage() {
    if(typeof(this.health) === 'number' ){
    this.health = this.health - 5;
    }
    if(this.health <= 0){
      this.health = 'hit points have been reduced to 0 the game is lost'
    }
  }

  takesleepDamage() {
    if(typeof(this.health) === 'number' ){
    this.health = this.health - 10;
    }
    if(this.health <= 0){
      this.health = 'hit points have been reduced to 0 the game is lost'
    }
  }

  healDamage() {
    if(typeof(this.health) === 'number' ){
    this.health = this.health + 11;
    }
    if(this.health <= 0){
      this.health = 'hit points have been reduced to 0 the game is lost'
    }
  }

  takepoisonedDamage() {
    if(typeof(this.health) === 'number' ){
    this.health = this.health - Math.floor(Math.random()* 5);
    }
    if(this.health <= 0){
      this.health = 'hit points have been reduced to 0 the game is lost'
    }
  }

}

module.exports = Player;
