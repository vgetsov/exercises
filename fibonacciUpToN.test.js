const { printFibo } = require('./fibonacciUpToN.js')

it('works', () => {
    expect(printFibo(5)).toStrictEqual([0, 1, 1, 2, 3])
    expect(printFibo(7)).toStrictEqual([0, 1, 1, 2, 3, 5, 8])
    expect(printFibo(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    expect(() => {
        printFibo(0)
    }).toThrow()
    expect(() => {
        printFibo('')
    }).toThrow()
    expect(printFibo('5')).toStrictEqual([0, 1, 1, 2, 3])
    expect(printFibo(1)).toStrictEqual([0])
    expect(printFibo(2)).toStrictEqual([0, 1])
    expect(printFibo(3)).toStrictEqual([0, 1, 1])
})
