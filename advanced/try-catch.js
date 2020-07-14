const getTip = (amount) => {
    if (typeof amount === 'number') {

        return amount * .25
    } else {
        throw Error('Argument must be a number') //prints stacktrace along with the error
    }
}


try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}