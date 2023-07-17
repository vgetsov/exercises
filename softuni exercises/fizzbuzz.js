// const fizzBuzz = () => {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 15 === 0) {
//             console.log('FizzBuzz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz()

const fizzBuzzNew = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || String(i).includes('3')) {
            if (i % 5 === 0 || String(i).includes('5')) {
                console.log('FizzBuzz')
            } else {
                console.log('Fizz')
            }
        } else if (i % 5 === 0 || String(i).includes('5')) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzzNew()
