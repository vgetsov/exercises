const { reverseStringWithRecursion } = require('./reverseStringWithRecursion.js')

it('works', () => {
    expect(reverseStringWithRecursion('hello')).toStrictEqual('olleh')
    expect(reverseStringWithRecursion('null')).toStrictEqual('llun')
    expect(reverseStringWithRecursion('456')).toStrictEqual('654')
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
