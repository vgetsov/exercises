const { isPalindrome } = require('./isPalindrome.js')

it('works', () => {
    expect(isPalindrome('redder')).toBeTruthy()
    expect(isPalindrome('r')).toBeTruthy()
    expect(isPalindrome('555')).toBeTruthy()
    expect(isPalindrome('undefined')).toBeFalsy()
    expect(isPalindrome('computer')).toBeFalsy()
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
