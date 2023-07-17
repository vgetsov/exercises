const input = ['Discount', '12', '30']

function printIncomeForFullCinema(arr) {
    const typeOfProjection = arr[0]
    const rows = Number(arr[1])
    const columns = Number(arr[2])
    let income = 0

    const numOfSeats = rows * columns
    let ticketPrice = 0

    switch (typeOfProjection) {
        case 'Premiere':
            ticketPrice = 12.0
            break
        case 'Normal':
            ticketPrice = 7.5
            break
        case 'Discount':
            ticketPrice = 5.0
            break
    }

    income = (numOfSeats * ticketPrice).toFixed(2)

    console.log(`${income} leva`)
}

printIncomeForFullCinema(input)
