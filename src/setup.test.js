import { Game } from './Game';
describe("Bowling Game", () => {
    let sut

    beforeEach(() => {
        // This code runs before each test in this describe block
        sut = new Game();
    });

    test('create a Game', () => {

        expect(sut).toBeDefined
    });

    test('All gutter balls', () => {
        for (var i = 0; i < 20; i++) {
            sut.roll(0)
        }

        var result = sut.score()

        expect(result).toBe(0)
    });

    test('All ones', () => {
        for (var i = 0; i < 20; i++) {
            sut.roll(1)
        }

        var result = sut.score()

        expect(result).toBe(20)
    });

    test('One Spare', () => {
        sut.roll(9)
        sut.roll(1)
        sut.roll(4)
        for (var i = 0; i < 17; i++) {
            sut.roll(0)
        }

        var result = sut.score()

        expect(result).toBe(18)
    });

    test('Spare in final frame', () => {
        for (var i = 0; i < 18; i++) {
            sut.roll(0)
        }
        sut.roll(9)
        sut.roll(1)
        sut.roll(4)

        var result = sut.score()

        expect(result).toBe(14)
    });

    test('Strike', () => {
        sut.roll(10)
        sut.roll(4)
        sut.roll(1)
        for (var i = 0; i < 16; i++) {
            sut.roll(0)
        }

        var result = sut.score()

        expect(result).toBe(20)
    });

    test('Example game', () => {
        sut.roll(1)
        sut.roll(4)
        sut.roll(4)
        sut.roll(5)
        sut.roll(6)
        sut.roll(4)
        sut.roll(5)
        sut.roll(5)
        sut.roll(10)
        sut.roll(0)
        sut.roll(1)
        sut.roll(7)
        sut.roll(3)
        sut.roll(6)
        sut.roll(4)
        sut.roll(10)
        sut.roll(2)
        sut.roll(8)
        sut.roll(6)

        var result = sut.score()

        expect(result).toBe(133)
    });

    test('Strike', () => {
        for (var i = 0; i < 12; i++) {
            sut.roll(10)
        }

        var result = sut.score()

        expect(result).toBe(300)
    });

})