const { reverseString } = require('./reverseAString.js')

it('works', () => {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('null')).toBe('llun')
    expect(reverseString('456')).toBe('654')
    expect(() => {
        reverseString(undefined)
    }).toThrow()
    expect(() => {
        reverseString(null)
    }).toThrow()
    expect(() => {
        reverseString(NaN)
    }).toThrow()
    expect(() => {
        reverseString(0)
    }).toThrow()
    expect(() => {
        reverseString(45)
    }).toThrow()
    expect(() => {
        reverseString([])
    }).toThrow()
})
