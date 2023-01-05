import express from 'express'

export const router = express.Router();

router.route('/').post((req, res) => {
    const player1Selection = req.body.selection
    const game = req.app.locals.game

    const player1 = game.player1
    player1.selection = player1Selection

    res.redirect('/selection2')

})

router.route('/').get((req, res) => {

    const name = req.app.locals.game.player2.name
    res.render('selection', {
        name: name,
        gameMode: ''
    })
})