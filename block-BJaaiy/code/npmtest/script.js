const lodash = require("lodash");
let characters = ["a", "b", "c", "d", "e", "i"];
let chunk = lodash.chunk(characters, 2);
console.log(chunk);
console.log(lodash.difference([2, 3], [3, 4]));
console.log(lodash.compact([0, 1, false, 2, "", 3]));

var array = [1, 2, 3];
console.log(lodash.concat(array, 2, [3], [[4]]));
console.log(lodash.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// drop

console.log(lodash.drop([1, 2, 3]));
console.log(lodash.drop([1, 2, 3], 2));
console.log(lodash.drop([1, 2, 3], 5));
console.log(lodash.drop([1, 2, 3], 0));

// dropRight

console.log(lodash.dropRight([1, 2, 3]));
console.log(lodash.dropRight([1, 2, 3], 2));
console.log(lodash.dropRight([1, 2, 3], 5));
console.log(lodash.dropRight([1, 2, 3], 0));

// array

var array = [1, 2, 3];
console.log(lodash.fill(array, "a"));



// moment js
const moment = require("moment")
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


var a = moment([2014-11-11]);
var b = moment([2015-09-11]);
 let d = a.diff(b, 'days') 
console.log(d);

let gap1 = moment("20141111", "YYYYMMDD").fromNow();
let gap2 = moment("20150911", "YYYYMMDD").fromNow();
console.log(gap1);
console.log(gap2);
