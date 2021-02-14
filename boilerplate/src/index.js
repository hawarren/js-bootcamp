
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
const printTeamSpread = (team, coach, firstPlayer, secondPlayer) => {
    const teamString = `Team: ${team}`
    const coachString = `Coach: ${coach}`
    let playerString = 'Players:'

    // playerString += players.join(', ')
    let fullString = `${teamString} \r\n${coachString} \r\n${playerString}`
    console.log(firstPlayer, secondPlayer)

}
const team = {
    name: 'Liberty',
    Coach: 'Casey Penn', 
    Players: ['Hanif', 'Hashim', 'Derrick', 'Darique', 'Keya']
}

printTeam('Liberty', 'Casey Penn', 'Hanif', 'Hashim', 'Derrick', 'Darique', 'Keya')
printTeamSpread(team.name, team.Coach, ...team.Players) //spread syntax

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
cities = ['Los Vegas',...cities]
//citiesCopy.push('Los Angeles')

console.log(`First array is ${cities}`)
//console.log(`Second array is ${citiesCopy}`)
 let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    year: 1027

 }
 let newHouse = {
     basement: true,
            ...house,
            bedrooms: 5
 }
 newHouse.year = 2018
 console.log(house)
 console.log(newHouse)

 // Create a person object with name and age
 // Create a location object with city and country
 // Creat a new overview object and use the spread operator to add all four properties

 let person = {
     name: 'Hanif',
     age: 39

 }
 let location = {
     city: 'Piscataway',
     country: 'USA'
 }
 let overView = {
     ...person,
     ...location
 }
 console.log(person)
 console.log(location)
 console.log(overView)