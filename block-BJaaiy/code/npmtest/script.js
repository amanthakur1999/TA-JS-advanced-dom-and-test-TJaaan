const lodash = require ("lodash");
const moment = require("moment");
let charecter = ["a", "b", "c", "d", ];
let chinked = lodash.chunk(charecter,2); 
console.log(chinked);




// moment js
var a = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(a)
var b =moment().format('dddd');
console.log(b);
var c = moment().format("MMM Do YY");
console.log(c);

 let dateDays = moment().add(7, 'days').calendar(); 
console.log(dateDays);

let months = moment().add(7, 'months').calendar(); 
console.log(months);

let years = moment().add(10, 'years').calendar(); 
console.log(years);

let subDate = moment().subtract(7, 'days').calendar();
console.log(subDate);

let subMonths = moment().subtract(7, 'months').calendar();
console.log(subMonths);

let subYears = moment().subtract(10, 'years').calendar();
console.log(subYears);