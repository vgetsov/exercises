// Write a function to check if two Strings are anagrams

const checkAnagrams = (str1, str2) => {
    if (str1.replaceAll(' ', '').length === 0 || str2.replaceAll(' ', '').length === 0) {
        throw new Error('You should enter a string')
    }

    const convertStringToSortedSymbols = (string) => {
        return string.replaceAll(' ', '').toLowerCase().split('').sort().join('')
    }

    const firstStrSymbols = convertStringToSortedSymbols(str1)
    const secondStrSymbols = convertStringToSortedSymbols(str2)

    return firstStrSymbols === secondStrSymbols
}

module.exports = { checkAnagrams }
