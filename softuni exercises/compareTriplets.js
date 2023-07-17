const aliceChallenges = [17, 28, 30]
const bobChallenges = [99, 16, 8]

const compareTriplets = (a, b) => {
    let alicePoints = 0
    let bobPoints = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePoints += 1
        } else if (b[i] > a[i]) {
            bobPoints += 1
        }
    }

    return [alicePoints, bobPoints]
}

console.log(compareTriplets(aliceChallenges, bobChallenges))
