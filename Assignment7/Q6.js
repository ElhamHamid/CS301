//car object with its property and methods 
'use strict'
let car={
    make:'Toyota',
    model:'camry',
    year:2018,
    odometer:5000,
    serviceCount:20,
    service:function(){return this.serviceCount+=1},
    getOdometerReding:function(){return this.odometer},
    reset:function(){let x=this.odometer=0;let y=this.serviceCount=0; return x +' '+y}
}


console.log(car.service());
console.log(car.getOdometerReding());
console.log(car.reset());

