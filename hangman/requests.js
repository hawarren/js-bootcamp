const getPuzzle = (wordCount, callback) => {
    // Making an HTTP request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            console.log(`this is the response status ${e.target.status}`)
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
            console.log(`this is logging the event listener: ${data.puzzle}`)
        } else if (e.target.readyState === 4) {
            callback('an error has taken place', undefined)
            console.log(`An error has taken place with the api`)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()

}

const getCountry = (codeToGet, callback) => {
    const countryRequest = new XMLHttpRequest()
    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
    countryRequest.send()
    const countryCode = codeToGet

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            console.log(e.target.status)
            const data = JSON.parse(e.target.responseText)
            const myCountry = data.find((country) => {
                return country.alpha2Code === countryCode
            })
            if (myCountry) {
                console.log(myCountry)
                    // console.log(`my country name is ${myCountry['name']}`)
                    //console.log(`my country name is ${myCountry[0]['name']}`)
                callback(undefined, myCountry['name'])
            } else {
                callback('No country found')
            }
        } else {
            // callback('There was an error', undefined)
        }
    })
}