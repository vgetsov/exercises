const teamData = [
    { name: 'Arsenal', goalsFor: 79, goalsAgainst: 36 },
    { name: 'Liverpool', goalsFor: 67, goalsAgainst: 30 },
    { name: 'Man United', goalsFor: 87, goalsAgainst: 45 },
    { name: 'Ipswich', goalsFor: 41, goalsAgainst: 64 },
    { name: 'Derby', goalsFor: 33, goalsAgainst: 63 },
    { name: 'Leicester', goalsFor: 30, goalsAgainst: 64 },
]

const teamsWithGoalDifferences = teamData.map(({ name, goalsFor, goalsAgainst }) => ({
    name,
    goalDifference: goalsFor - goalsAgainst,
}))

const smallestGoalDifference = () => {
    return teamsWithGoalDifferences.reduce((acc, currValue) => {
        return acc?.goalDifference < currValue.goalDifference ? acc : currValue
    }, {})
}

console.log(smallestGoalDifference())
