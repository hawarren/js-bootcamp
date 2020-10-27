const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}


getDataCallback(2, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDataCallback(data, (error, data) => {
            if (err) {
                console.log(`this is the callback error: ${error}`)
            } else {
                console.log(` my callback data ${data}`)
            }

        })
    }
})
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) :
            reject('Number must be provided')
    }, 2000)
})

getDataPromise('10').then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(`this is final chained promise data ${data}`)
}).catch((err) => {
    console.log(`caught this error ${err}`)
})