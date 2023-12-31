// Write a function that takes a String and reverses it

const reverseString = (string) =>
    string
        .split('')
        .reduce((acc, currValue) => [currValue, ...acc], [])
        .join('')

module.exports = { reverseString }
