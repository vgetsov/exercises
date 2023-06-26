const reverseStringWithRecursion = (string) => {
    if (string.length === 1) {
        return string
    }

    const [firstSymbol, ...rest] = string

    return [reverseStringWithRecursion(rest), firstSymbol].join('')
}

module.exports = { reverseStringWithRecursion }
