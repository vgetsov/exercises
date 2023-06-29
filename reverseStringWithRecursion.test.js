const { reverseStringWithRecursion } = require('./reverseStringWithRecursion.js')

it('works', () => {
    expect(reverseStringWithRecursion('hello')).toBe('olleh')
    expect(reverseStringWithRecursion('null')).toBe('llun')
    expect(reverseStringWithRecursion('456')).toBe('654')
    expect(() => {
        reverseStringWithRecursion(undefined)
    }).toThrow()
    expect(() => {
        reverseStringWithRecursion(null)
    }).toThrow()
    expect(() => {
        reverseStringWithRecursion(NaN)
    }).toThrow()
    expect(() => {
        reverseStringWithRecursion(0)
    }).toThrow()
    expect(() => {
        reverseStringWithRecursion(45)
    }).toThrow()
    expect(() => {
        reverseStringWithRecursion([])
    }).toThrow()
})
