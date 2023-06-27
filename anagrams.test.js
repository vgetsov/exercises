const { checkAnagrams } = require('./anagrams.js')

it('works', () => {
    expect(checkAnagrams('hello', 'olleh')).toBe(true)
    expect(checkAnagrams('null', 'llun')).toBe(true)
    expect(checkAnagrams('anagram', 'nag a ram')).toBe(true)
    expect(checkAnagrams('anagram', 'nag a   ram')).toBe(true)
    expect(checkAnagrams('1333', '3331')).toBe(true)
    expect(checkAnagrams('r', 'r')).toBe(true)
    expect(checkAnagrams('vv', 'vv')).toBe(true)
    expect(checkAnagrams('vvr', 'rvv')).toBe(true)
    expect(checkAnagrams('vvr', 'vrr')).toBe(false)
    expect(checkAnagrams('hello', 'ollehs')).toBe(false)
    expect(checkAnagrams('debit card', 'bad credit')).toBe(true)
    expect(checkAnagrams('school master', 'the classroom')).toBe(true)
    expect(checkAnagrams('goodbye', 'bye')).toBe(false)
    expect(() => {
        checkAnagrams(undefined, null)
    }).toThrow()
    expect(() => {
        checkAnagrams(' ', '')
    }).toThrow()
    expect(() => {
        checkAnagrams(1333, 3331)
    }).toThrow()
    expect(() => {
        checkAnagrams(['anagram'], ['nag a   ram'])
    }).toThrow()
})
