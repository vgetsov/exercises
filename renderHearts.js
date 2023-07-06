const renderHearts = ({ livesLeft }) => {
    if (typeof livesLeft !== 'number') {
        throw new Error('Please pass a number')
    }

    if (livesLeft === 0) {
        throw new Error('You have no lives left')
    }

    if (livesLeft < 0) {
        throw new Error('Lives should be 0 or bigger')
    }

    return Array.from({ length: livesLeft }, () => '♥')
}

module.exports = { renderHearts }
