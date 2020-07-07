const add = function(a, b) {
    console.log(arguments) //arguments is an array of arguments passed in (whether named or not); not available in arrow function
}

add(11, 22, 33, 44)

const car = {
    color: 'Red',
    getSummary: function() {
        return 'The car is ${this.color}'
    }
}