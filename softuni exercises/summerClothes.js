const input = ['16', 'Morning']

function summerClothesPicker(arr) {
    const degrees = Number(arr[0])
    const timeofDay = arr[1]

    let outfit = ''
    let shoes = ''

    if (degrees >= 10 && degrees <= 18) {
        switch (timeofDay) {
            case 'Morning':
                outfit = 'Sweatshirt'
                shoes = 'Sneakers'
                break
            case 'Afternoon':
                outfit = 'Shirt'
                shoes = 'Moccasins'
                break
            case 'Evening':
                outfit = 'Shirt'
                shoes = 'Moccasins'
            default:
                break
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (timeofDay) {
            case 'Morning':
                outfit = 'Shirt'
                shoes = 'Moccasins'
                break
            case 'Afternoon':
                outfit = 'T-Shirt'
                shoes = 'Sandals'
                break
            case 'Evening':
                outfit = 'Shirt'
                shoes = 'Moccasins'
            default:
                break
        }
    } else if (degrees > 25) {
        switch (timeofDay) {
            case 'Morning':
                outfit = 'T-Shirt'
                shoes = 'Sandals'
                break
            case 'Afternoon':
                outfit = 'Swim Suit'
                shoes = 'Barefoot'
                break
            case 'Evening':
                outfit = 'Shirt'
                shoes = 'Moccasins'
            default:
                break
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
