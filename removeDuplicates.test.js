const { removeDuplicates } = require('./removeDuplicates.js')

it('works', () => {
    expect(removeDuplicates([1, 2, 3])).toStrictEqual([1, 2, 3])
    expect(removeDuplicates([1, 2, 3, 1, 2, 3])).toStrictEqual([1, 2, 3])
    expect(removeDuplicates([1])).toStrictEqual([1])
    expect(removeDuplicates([1, 1])).toStrictEqual([1])
    expect(removeDuplicates(['1', '1', 'a', 'a', 'aa', '11', 'b'])).toStrictEqual(['1', 'a', 'aa', '11', 'b'])
    expect(removeDuplicates([undefined, null, NaN, undefined])).toStrictEqual([undefined, null, NaN])
    expect(() => {
        removeDuplicates({ a: 1, a: 2 })
    }).toThrow('Please pass an array')
    expect(() => {
        removeDuplicates([])
    }).toThrow('Cannot pass an empty array')
    expect(() => {
        removeDuplicates(1, 1, 2)
    }).toThrow('You cannot pass additional arguments')
    expect(() => {
        removeDuplicates(11)
    }).toThrow('Please pass an array')
    expect(() => {
        removeDuplicates('1 1 2')
    }).toThrow('Please pass an array')
    expect(() => {
        removeDuplicates([1], [1])
    }).toThrow('You cannot pass additional arguments')
    expect(() => {
        removeDuplicates('')
    }).toThrow('Please pass an array')
})
