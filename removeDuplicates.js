// Write a function to remove duplicates from an array

const removeDuplicates = (arr, ...rest) => {
    if (rest.length > 0) {
        throw new Error('You cannot pass additional arguments')
    }

    if (Array.isArray(arr) === false) {
        throw new Error('Please pass an array')
    }

    if (arr.length === 0) {
        throw new Error('Cannot pass an empty array')
    }

    return arr.reduce((acc, currValue) => {
        if (!acc.includes(currValue)) {
            return [...acc, currValue]
        } else {
            return acc
        }
    }, [])

    // const filteredArr = []

    // for (let i = 0; i < arr.length; i++) {
    //     if (!filteredArr.includes(arr[i])) {
    //         filteredArr.push(arr[i])
    //     }
    // }

    // return filteredArr
}

module.exports = { removeDuplicates }
