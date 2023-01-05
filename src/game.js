import Player from '../src/player.js'
class Game {

    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.winnerList = []
        this.rpsRules = {
            rock: 'scissor',
            paper: 'rock',
            scissor: 'paper'
        }
    }

    play = () => {
        if (this.rpsRules[this.player1.selection] === this.player2.selection) {
            this.winnerList.push(this.player1.name)
        } else if (this.rpsRules[this.player2.selection] === this.player1.selection) {
            this.winnerList.push(this.player2.name)
        } else {
            this.winnerList.push('Draw')
        }
    }


}

export default Game