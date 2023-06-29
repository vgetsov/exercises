const { checkAnagrams } = require('./anagrams.js')

it('works', () => {
    expect(checkAnagrams('hello', 'olleh')).toBeTruthy()
    expect(checkAnagrams('null', 'llun')).toBeTruthy()
    expect(checkAnagrams('anagram', 'nag a ram')).toBeTruthy()
    expect(checkAnagrams('anagram', 'nag a   ram')).toBeTruthy()
    expect(checkAnagrams('1333', '3331')).toBeTruthy()
    expect(checkAnagrams('r', 'r')).toBeTruthy()
    expect(checkAnagrams('vv', 'vv')).toBeTruthy()
    expect(checkAnagrams('vvr', 'rvv')).toBeTruthy()
    expect(checkAnagrams('debit card', 'bad credit')).toBeTruthy()
    expect(checkAnagrams('school master', 'the classroom')).toBeTruthy()
    expect(checkAnagrams('vvr', 'vrr')).toBeFalsy()
    expect(checkAnagrams('hello', 'ollehs')).toBeFalsy()
    expect(checkAnagrams('goodbye', 'bye')).toBeFalsy()
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
