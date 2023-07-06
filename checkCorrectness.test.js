const { checkCorrectness } = require('./checkCorrectness.js')

test('checkCorrectness returns true for correct responses', () => {
    const isCorrect = checkCorrectness({
        correct: {
            first: 'first correct response',
            second: 'second response',
        },
        actual: {
            first: 'first correct response',
            second: 'second response',
        },
    })

    expect(isCorrect).toBe(true)
})

test('checkCorrectness returns false for incorrect responses', () => {
    const isCorrect = checkCorrectness({
        correct: {
            first: 'first correct response',
            second: 'second response',
        },
        actual: {
            first: 'first actual response',
            second: 'second response',
        },
    })

    expect(isCorrect).toBe(false)
})

test('checkCorrectness to throw if wrong value is passed', () => {
    expect(() =>
        checkCorrectness([
            ['first correct response', 'second response'],
            ['first actual response', 'second response'],
        ])
    ).toThrow(TypeError)
})
