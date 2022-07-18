// Day-6 OOPS task-4
console.log('------------Day-6 OOPS task-4 given in Day-7 activities------------')
class uberPrice{
    constructor(distance, rate, waitingPeriod){
        this.distance = distance;   // distance in Km
        this.rate = rate;           // rate in rupees
        this.waitingPeriod = waitingPeriod; // waitingPeriod in minutes
    }

    funPrice(){
        let ridePriceis = this.distance*this.rate + this.waitingPeriod*5;
        console.log('The ride price is')
        return ridePriceis 
    }
}

let thePriceIs = new uberPrice(20,20,0)
console.log(thePriceIs.funPrice())