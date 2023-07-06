const checkCorrectness = ({ correct, actual }) => {
    return correct.first === actual.first && correct.second === actual.second
}

module.exports = { checkCorrectness }
