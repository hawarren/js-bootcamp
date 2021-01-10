const now = new Date()
const timestamp = now.getTime()
console.log(`The time and date is ${now}`)
console.log(`Year is ${now.getFullYear()}`)
console.log(`Month is 0 indexed, it is: ${now.getMonth()}`)
console.log(`Day of week is ${now.getDay()}`)
console.log(`Day of month is ${now.getDate()}`)
console.log(`Month and day is ${now.getMonth()+1}\\${now.getDate()}`)
console.log(`Hour is ${now.getHours()}`)
console.log(`Minutes is ${now.getMinutes()}`)
console.log(`Seconds is ${now.getSeconds()}`)
    // console.log(month)
console.log(`timestamp ${timestamp} converted to date ${new Date(timestamp)}`)

//create two dates in the past (use string for date)
//2. Get timestamps for both
//3.Figure out which is first and print it's time (use toString)
let hanifBday = new Date('July 6 1981').getTime() //get the timestamp not just the date
let dariqueBday = new Date('July 31, 1988').getTime()

if (hanifBday < dariqueBday) {
    console.log(new Date(hanifBday) + `which is Hanif\'s Birthday`)
    console.log(new Date(dariqueBday) + ` is the other date, which is Darique\'s Birthday`)
} else
    console.log(new Date(dariqueBday) + `which is Hanif\'s Birthday`)