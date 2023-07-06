const toPascalCase = ({ sentence }) => {
    if (typeof sentence !== 'string') {
        throw new Error('Pass a string')
    }

    return sentence
        .split(' ')
        .map(([firstLetter, ...restOfLetters]) => [firstLetter.toUpperCase(), ...restOfLetters].join(''))
        .join(' ')
}

module.exports = { toPascalCase }
