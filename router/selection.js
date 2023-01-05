import express from 'express'
import Game from '../src/game.js'
import Player from '../src/player.js'

export const router = express.Router();

router.route('/').post((req, res) => {
    const gameMode = req.body.gameMode
    const player1name = req.body.player1
    const player2name = req.body.player2
    const player1 = new Player(player1name)
    const player2 = new Player(player2name)
    const game = new Game(player1, player2)
    req.app.locals.game = game
    req.app.locals.gameMode = gameMode

    res.redirect('/selection')

})


router.route('/').get((req, res) => {
    const name = req.app.locals.game.player1.name
    const gameMode = req.app.locals.gameMode

    res.render('selection', {
        name: name,
        gameMode: gameMode
    })
})
