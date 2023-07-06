const { renderHearts } = require('./renderHearts.js')

test('heartsRendered returns an array containing number of hearts equal to the livesLeft value', () => {
    const heartsRendered = renderHearts({ livesLeft: 3 })

    expect(heartsRendered).toEqual(['♥', '♥', '♥'])

    expect(() => renderHearts({ livesLeft: 0 })).toThrowError('You have no lives left')

    expect(() => renderHearts({ livesLeft: -2 })).toThrowError('Lives should be 0 or bigger')

    expect(() => renderHearts({ livesLeft: '3' })).toThrowError('Please pass a number')
})

test('heartsRendered returns an array containing number of hearts equal to the livesLeft value', () => {
    const heartsRendered = renderHearts({ livesLeft: 1 })

    expect(heartsRendered).toEqual(['♥'])

    expect(() => renderHearts({ livesLeft: 0 })).toThrowError('You have no lives left')

    expect(() => renderHearts({ livesLeft: -2 })).toThrowError('Lives should be 0 or bigger')

    expect(() => renderHearts({ livesLeft: '3' })).toThrowError('Please pass a number')
})

test(`heartsRendered throws 'You have no lives left' if you pass 0 as livesLeft value`, () => {
    expect(() => renderHearts({ livesLeft: 0 })).toThrowError('You have no lives left')
})

test(`heartsRendered throws 'Lives should be 0 or bigger' if you pass less than 0 as livesLeft value`, () => {
    expect(() => renderHearts({ livesLeft: -2 })).toThrowError('Lives should be 0 or bigger')
})

test(`heartsRendered throws 'Please pass a number' if you don't pass a number as a livesLeft value`, () => {
    expect(() => renderHearts({ livesLeft: [-2] })).toThrowError('Please pass a number')
})

test(`heartsRendered throws 'Please pass a number' if you don't pass a number as a livesLeft value`, () => {
    expect(() => renderHearts({ livesLeft: undefined })).toThrowError('Please pass a number')
})
