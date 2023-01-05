import Player from '../src/player.js'
import { expect } from 'chai'

describe('player class', () => {


    let testPlayer
    beforeEach(() => {
        const testName = 'test';
        const selection = 'rock'
        testPlayer = new Player(testName, selection)
    })

    it('a player object can be created with a name nad selection', () => {
        expect(testPlayer).to.have.property('name')
        expect(testPlayer).to.have.property('selection')
        expect(testPlayer.name).to.be.equal('test')
        expect(testPlayer.selection).to.be.equal('rock')

    })

    it('can generate a random selection', () => {
        testPlayer = new Player('testName')

        testPlayer.randomSelection()

        expect(testPlayer.selection).to.be.oneOf(["rock", "paper", "scissor"])
    })

})