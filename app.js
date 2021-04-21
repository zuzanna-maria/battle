const express = require('express')
const app = express()
const port = 3000
const Battle = require('./battle.js')
const Player = require('./player.js')
const battle = new Battle()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')

})

app.post('/name', (req, res) => {
  const player1 = new Player(req.body.name1)
  const player2 = new Player(req.body.name2)
  battle.add(player1)
  battle.add(player2)
  console.log("first name block running")
  res.render('name.ejs', {
    name1: battle.currentPlayer().name,
    health1: battle.currentPlayer().health,
    name2: battle.otherPlayer().name,
    health2: battle.otherPlayer().health
  })

})


app.post('/turn', (req, res) => {
  battle.turn()
  console.log(battle.currentPlayer().name)
  console.log(battle.currentPlayer().health)
  console.log(battle.otherPlayer().name)
  console.log(battle.otherPlayer().health)
  res.render('turn.ejs', {

    currentPlayerName: battle.currentPlayer().name,
    currentPlayerHealth: battle.currentPlayer().health,
    otherPlayerName: battle.otherPlayer().name,
    otherPlayerHealth: battle.otherPlayer().health
  })
  battle.switch()
})

app.get('/name', (req, res) => {
  const player = battle.currentPlayer()
  const otherplayer = battle.otherPlayer()
  console.log("second name block running")

  res.render('name.ejs', {
    name1: player.name,
    health1: player.health,
    name2: otherplayer.name,
    health2: otherplayer.health
  })
})


app.listen(port, () => {
  console.log("detects port request")
})
