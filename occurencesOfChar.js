// Write a function to count the number of occurrences of a given Character in a String

const countOccurrencesOfChar = (string, character) => {
    if (
        typeof string !== 'string' ||
        typeof character !== 'string' ||
        character.trim() === '' ||
        string.length < character.length
    ) {
        throw new Error('Please enter a valid character')
    }

    const objOfChars = {}

    for (let i = 0; i < string.length; i++) {
        if (objOfChars[string[i]] === undefined) {
            objOfChars[string[i]] = 1
            continue
        }

        objOfChars[string[i]] += 1
    }

    if (objOfChars[character] === undefined) {
        return `Character ${character} occurs 0 times in '${string}'`
    }

    return `Character ${character} occurs ${objOfChars[character]} times in '${string}'`
}

module.exports = { countOccurrencesOfChar }
