const checkCorrectness = ({ correct, actual }) => {
    const correctObjKeys = Object.keys(correct)
    const actualObjKeys = Object.keys(actual)

    if (correctObjKeys.length < actualObjKeys.length) {
        throw new Error('You passed more replies than questions')
    }

    if (!correctObjKeys.every((key) => actualObjKeys.includes(key))) {
        throw new Error('You passed a reply to a non-existing question')
    }

    return correctObjKeys.every((question) => correct[question] === actual[question])
}

module.exports = { checkCorrectness }
