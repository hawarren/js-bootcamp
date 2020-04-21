//objects-methods.js
let restaurant = {
    name: "LambChopsHQ",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailibility: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        if (this.checkAvailibility) {
            this.guestCount = this.guestCount + partySize
            return true;            
        }
        else
        {
            return false;
        }
        
    },
    removeParty: function(partySize)
    {
        if(this.guestCount >= partySize )
        {
            this.guestCount-=partySize; //subtract partySize from our guests            
        }
        else
        {
            this.guestCount = 0; // e.g. can't have negative seatsLeft
        }

    }


};
//seatParty
//removeParty
restaurant.seatParty(72);
console.log(restaurant.checkAvailibility(4)) // should return true
restaurant.removeParty(5);
console.log(restaurant.checkAvailibility(4)) //should return false