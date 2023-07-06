const { toPascalCase } = require('./toPascalCase.js')

test('toPascalCase turns every first letter of a word to upper case', () => {
    const title = toPascalCase({ sentence: 'Make JS great again' })

    expect(title).toBe('Make JS Great Again')
})

test('toPascalCase turns every first letter of a word to upper case', () => {
    const title = toPascalCase({ sentence: 'a' })

    expect(title).toBe('A')
})

test('toPascalCase turns every first letter of a title to upper case', () => {
    const title = toPascalCase({ sentence: 'bb' })

    expect(title).toBe('Bb')
})

test('toPascalCase turns every first letter of a word to upper case', () => {
    const title = toPascalCase({ sentence: 'bB' })

    expect(title).toBe('BB')
})

test('toPascalCase turns every first letter of a word to upper case', () => {
    const title = toPascalCase({ sentence: 'hello' })

    expect(title).toBe('Hello')
})

test('toPascalCase turns every first letter of a word to upper case', () => {
    const title = toPascalCase({ sentence: '123' })

    expect(title).toBe('123')
})

test('toPascalCase throws if passed value is not a string', () => {
    expect(() => toPascalCase({ sentence: undefined })).toThrow()
})

test('toPascalCase throws if passed value is not a string', () => {
    expect(() => toPascalCase({ sentence: 123 })).toThrow()
})

test('toPascalCase throws if passed value is not a string', () => {
    expect(() => toPascalCase({ sentence: null })).toThrow()
})

test('toPascalCase throws if passed value is not a string', () => {
    expect(() => toPascalCase({ sentence: NaN })).toThrow()
})

test('toPascalCase throws if passed value is not a string', () => {
    expect(() => toPascalCase({ sentence: ['This is a sentence'] })).toThrow()
})

test('toPascalCase throws if passed value is not a string', () => {
    expect(() => toPascalCase({ sentence: [] })).toThrow()
})
