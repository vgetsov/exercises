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

test('checkCorrectness returns true for correct responses', () => {
    const isCorrect = checkCorrectness({
        correct: {
            first: 'first correct response',
            second: 'second response',
        },
        actual: {
            second: 'second response',
            first: 'first correct response',
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

test('checkCorrectness returns false for incorrect responses', () => {
    const isCorrect = checkCorrectness({
        correct: {
            first: 'first correct response',
            second: 'second response',
        },
        actual: {
            first: '',
            second: 'second response',
        },
    })

    expect(isCorrect).toBe(false)
})

test('checkCorrectness returns false for incorrect responses', () => {
    const isCorrect = checkCorrectness({
        correct: {
            first: 'first correct response',
            second: 'second response',
        },
        actual: {
            first: 'first actual response',
            second: '',
        },
    })

    expect(isCorrect).toBe(false)
})

test('checkCorrectness returns false for incorrect responses', () => {
    expect(() =>
        checkCorrectness({
            correct: {
                first: 'first correct response',
                second: 'second response',
            },
            actual: {
                first: 'first correct response',
                third: 'third response',
            },
        })
    ).toThrow()
})

test('checkCorrectness returns false for incorrect responses', () => {
    expect(() =>
        checkCorrectness({
            correct: {
                first: 'first correct response',
                second: 'second response',
            },
            actual: {
                firstsecond: 'first correct response',
            },
        })
    ).toThrow()
})

test('checkCorrectness returns false for incorrect responses', () => {
    expect(() =>
        checkCorrectness({
            correct: {
                first: 'first correct response',
                second: 'second response',
            },
            actual: {
                first: 'first correct response',
                second: 'second response',
                third: 'third response',
            },
        })
    ).toThrow()
})

test('checkCorrectness to throw if wrong value is passed', () => {
    expect(() =>
        checkCorrectness([
            ['first correct response', 'second response'],
            ['first actual response', 'second response'],
        ])
    ).toThrow(TypeError)
})
