const { isPalindrome } = require('./isPalindrome.js')

it('works', () => {
    expect(isPalindrome('redder')).toBe(true)
    expect(isPalindrome('r')).toBe(true)
    expect(isPalindrome('555')).toBe(true)
    expect(isPalindrome('undefined')).toBe(false)
    expect(isPalindrome('computer')).toBe(false)
    expect(() => {
        isPalindrome(555)
    }).toThrow()
    expect(() => {
        isPalindrome('')
    }).toThrow()
    expect(() => {
        isPalindrome(undefined)
    }).toThrow()
    expect(() => {
        isPalindrome(null)
    }).toThrow()
    expect(() => {
        isPalindrome(NaN)
    }).toThrow()
    expect(() => {
        isPalindrome(0)
    }).toThrow()
    expect(() => {
        isPalindrome([])
    }).toThrow()
})
