import Game from '../src/game.js'
import { expect } from 'chai'

describe('game class', () => {

    let testPlayer1, testPlayer2, testGame

    beforeEach(() => {
        testPlayer1 = {
            name: 'test name',
            selection: 'rock'
        }
        testPlayer2 = {
            name: 'test name',
            selection: 'paper'
        }
        testGame = new Game(testPlayer1, testPlayer2)
    })
    afterEach(() => {
        testGame = null
    })

    it('a game object should be created with the player1 and player2', () => {
        expect(testGame.player1).to.equal(testPlayer1)
        expect(testGame.player2).to.equal(testPlayer2)
    })


    it('game can calculate winner and add it to the winner list', () => {
        testGame.play()
        expect(testGame.winnerList.length).equal(1)
    })

    it('game can calculate winner and add it to the winner list', () => {
        testGame.play()
        expect(testGame.winnerList.length).equal(1)
    })

})
