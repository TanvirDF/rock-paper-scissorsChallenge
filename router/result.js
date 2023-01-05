import express from 'express'

export const router = express.Router();

router.route('/').post((req, res) => {
    const gameMode = req.app.locals.gameMode
    const game = req.app.locals.game
    if (gameMode === 'multiPlayer') {
        const player2Selection = req.body.selection
        const player2 = game.player2
        player2.selection = player2Selection
    } else {
        const player1Selection = req.body.selection
        const player1 = game.player1
        player1.selection = player1Selection
        const player2 = game.player2
        player2.name = player2.name ? player2.name : 'friendly bot'
        player2.selection = player2.randomSelection()
    }

    game.play()

    res.redirect('/result')

})

router.route('/').get((req, res) => {

    const game = req.app.locals.game
    const player1 = game.player1
    const player2 = game.player2
    res.render('result', {
        player1: player1,
        player2: player2,
        game: game
    })
})