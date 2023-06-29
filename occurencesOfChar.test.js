const { countOccurrencesOfChar } = require('./occurencesOfChar.js')

it('works', () => {
    expect(countOccurrencesOfChar('hello', 'h')).toBe("Character h occurs 1 times in 'hello'")
    expect(countOccurrencesOfChar('hello', 'l')).toBe("Character l occurs 2 times in 'hello'")
    expect(countOccurrencesOfChar('hello', 'z')).toBe("Character z occurs 0 times in 'hello'")
    expect(countOccurrencesOfChar('h', 'h')).toBe("Character h occurs 1 times in 'h'")
    expect(countOccurrencesOfChar('brrr', 'r')).toBe("Character r occurs 3 times in 'brrr'")
    expect(countOccurrencesOfChar('string', 'g')).toBe("Character g occurs 1 times in 'string'")
    expect(() => {
        countOccurrencesOfChar('Hello World', ' ')
    }).toThrow()
    expect(() => {
        countOccurrencesOfChar('s', 'string')
    }).toThrow()
    expect(() => {
        countOccurrencesOfChar('Hello World', '')
    }).toThrow()
    expect(() => {
        countOccurrencesOfChar('   ', '')
    }).toThrow()
    expect(() => {
        countOccurrencesOfChar(null, 's')
    }).toThrow()
    expect(() => {
        countOccurrencesOfChar('null', null)
    }).toThrow()
    expect(() => {
        countOccurrencesOfChar(undefined, undefined)
    }).toThrow()
    // expect(countOccurrencesOfChar('hello', 'lo')).toStrictEqual(3)
    // expect(countOccurrencesOfChar('', 'hell')).toStrictEqual(-1)
    // expect(countOccurrencesOfChar('', '')).toStrictEqual(0)
    // expect(countOccurrencesOfChar('5', 5)).toStrictEqual(0)
    // expect(() => {
    //     countOccurrencesOfChar(null, 'null')
    // }).toThrow()
})
