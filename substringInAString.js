// Write a function to find substring in a string.

const substringInAString = (string, substring) => {
    return string.indexOf(substring)
}

console.log(substringInAString('hel', 'hell'))

module.exports = { substringInAString }
