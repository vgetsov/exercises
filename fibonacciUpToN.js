const printFibo = (n) => {
    if (n < 1) {
        throw new Error('n should be 0 or bigger')
    }

    if (n === 1) {
        return [0]
    }

    if (n === 2) {
        return [0, 1]
    }

    const fiboMinusTwo = printFibo(n - 2)
    const fiboMinusOne = printFibo(n - 1)

    const currentNumber = fiboMinusTwo[fiboMinusTwo.length - 1] + fiboMinusOne[fiboMinusOne.length - 1]

    return [...fiboMinusOne].concat(currentNumber)
}

console.log(printFibo(5))

module.exports = { printFibo }

// export const printFibo = (n) => {
//   if (n < 1) {
//     throw new Error("n should be 1 or bigger");
//   }

//   if (n === 1) {
//     return [0];
//   }

//   if (n === 2) {
//     return [0, 1];
//   }

//   const arr = [0, 1];

//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }

//   return arr;
// };
