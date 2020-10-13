const getPuzzle = (callback) => {
    // Making an HTTP request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            console.log(e.target.status)
            const data = JSON.parse(e.target.responseText)
                // callback(undefined, data.puzzle)
            console.log(`this is logging the event listener: ${data}`)

            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('an error has taken place', undefined)
            console.log(`An error has taken place with the api`)
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCounta=3')
    request.send()

}