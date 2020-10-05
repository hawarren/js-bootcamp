const data = {
        locations: [],
        get location() {
            return this._location
        },
        set location(value) {
            this._location = value.trim()
            this.locations.push(value.trim())

        }
    }
    //code that uses the data object
data.location = 'Piscataway'
data.location = '  New York'
console.log(data.location)