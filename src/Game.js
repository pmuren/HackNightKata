const full_frame = 10;

export class Game {
    constructor() {
        this._rolls = []
    }

    roll(pins) {
        this._rolls.push(pins)
    }

    score() {
        let calculatedScore = 0;
        for (let i = 0; i < this._rolls.length; i++) {
            let is_strike = this._rolls[i] === full_frame
            let is_spare = this._rolls[i] + this._rolls[i + 1] === full_frame 
            let is_last_frame = i === this._rolls.length - 3
            if (is_strike) {
                calculatedScore += full_frame 
                + this._rolls[i + 1] 
                + this._rolls[i + 2]
                if (is_last_frame) {
                    return calculatedScore
                }
            } else if (is_spare) {
                calculatedScore += full_frame + this._rolls[i + 2]
                if (is_last_frame) {
                    return calculatedScore
                }
                i++
            } else {
                calculatedScore += this._rolls[i]
            }
        }
        return calculatedScore
    }
}