const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            console.log(`this is the response status ${e.target.status}`)
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
            console.log(`this is logging the event listener: ${data.puzzle}`)
        } else if (e.target.readyState === 4) {
            reject('an error has taken place')
            console.log(`An error has taken place with the api`)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getPuzzleFetch = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('Unable to fetch puzzle');
            }
        })
}

const getPuzzleFetchAsync = async(wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

//change getou8ntry to use async/await
//change get location to use async/await.
const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()
    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
    countryRequest.send()
    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            console.log(e.target.status)
            const data = JSON.parse(e.target.responseText)
            const myCountry = data.find((country) => {
                return country.alpha2Code === countryCode
            })
            if (myCountry) {
                console.table(myCountry)
                resolve(myCountry['name'])
            } else {
                reject('No country found')
            }
        }
    })
})
const getCountryFetch = async(countryCode) => {
    let mydata = await fetch('https://restcountries.eu/rest/v2/all')
    if (mydata.status === 200) {
        mydata = await mydata.json()
    } else {
        throw new Error('Unable to fetch countries')
    }

    mydata = await mydata.find((country) => {
        return country.alpha2Code === countryCode
    })
    return mydata

}
const getLocation = async() => {
        const response = await fetch('http://ipinfo.io/69.115.86.87?token=b34e67241780d0')
        if (response.status === 200) {
            const thisLocation = await response.json()
            return thisLocation
        } else {
            throw new Error('ip address locator failed')
        }
    }
    //Create a new function called getCurrentCountry
    //Should return a promise that resolves the country object for your current location
    //use async/await for the new function
const getCurrentCountry = async() => {
    const myLoc = await getLocation();
    return getCountryFetch(myLoc.country)

}