const moment = require('moment');

// Jan 1st 1970 00:00:00 am

// let date = new Date();
// let months = ['Jan', 'Feb']
// console.log(months[date.getMonth()]);

// let date = moment();
// date.add(100, 'year').subtract(1, 'M');
// console.log(date.format('YYYY-MMM-Do'));

let date = moment();
console.log(date.format('h:mm a'));