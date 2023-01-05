class Player {
    constructor(name, selection = this.randomSelection()) {
        this.name = name
        this.selection = selection
    }

    randomSelection() {
        const rps = ["rock", "paper", "scissor"]
        return rps[Math.floor(Math.random() * 3)]

    }

}


export default Player