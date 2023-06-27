// Write a function to check if a String is a palindrome or not?

const isPalindrome = (string) => {
    if (string.length < 1) {
        throw new Error('You must enter a string')
    }

    const punctuationAndEmptySpace = /[\.,?! ]/g

    const cleanString = string.replaceAll(punctuationAndEmptySpace, '').toLowerCase()

    const reversedString = cleanString
        .split('')
        .reduce((acc, currValue) => [currValue, ...acc], [])
        .join('')

    return cleanString === reversedString
}

module.exports = { isPalindrome }
