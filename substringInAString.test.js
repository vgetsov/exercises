const { substringInAString } = require('./substringInAString.js')

it('works', () => {
    expect(substringInAString('hello', 'hell')).toStrictEqual(0)
    expect(substringInAString('hel', 'hell')).toStrictEqual(-1)
    expect(substringInAString('hello', 'lo')).toStrictEqual(3)
    expect(substringInAString('', 'hell')).toStrictEqual(-1)
    expect(substringInAString('', '')).toStrictEqual(0)
    expect(substringInAString('5', 5)).toStrictEqual(0)
    expect(() => {
        substringInAString(5, 5)
    }).toThrow()
    expect(() => {
        substringInAString(null, 'null')
    }).toThrow()
})
