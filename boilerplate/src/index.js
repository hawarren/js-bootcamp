const calculateAverage = (thing, ...numbers) => {
    //    return (numOne + numTwo) /2
    let sum = 0
    numbers.forEach((num) => {
        sum = +num
    })
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`


}

console.log(calculateAverage('grade', 0, 100, 200, 300))

//Create printTeam that takes team name, coach, and players

//print
//Team: Liberty
//Coach: Casey Penn
//Players: Hanif, Hashim, Derrick, Darique, and Keya

const printTeam = (team, coach, ...players) => {
    const teamString = `Team: ${team}`
    const coachString = `Coach: ${coach}`
    let playerString = 'Players:'
    // players.forEach((player) => {
    //     playerString += `, ${player}`
    // })

    // playerString = 'Players: ' + playerString.slice(1, playerString.length) //get rid of last trailing comma
    playerString += players.join(', ')
    let fullString = `${teamString} \r\n${coachString} \r\n${playerString}`
    console.log(fullString)

}

printTeam('Liberty', 'Casey Penn', 'Hanif', 'Hashim', 'Derrick', 'Darique', 'Keya')