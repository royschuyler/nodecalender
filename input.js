var argv = require('yargs')

var monthOfYear;
var moy;
var monthOfYear = process.argv[2].toLowerCase().charAt(0).toUpperCase() + process.argv[2].slice(1);
var dom = process.argv[3];
var y = process.argv[4];

if (monthOfYear == 'January')   { moy = 13; y = process.argv[4] - 1 }
if (monthOfYear == 'February') { moy = 14; y = process.argv[4] - 1 }
if (monthOfYear == 'March')     { moy = 3 }
if (monthOfYear == 'April')     { moy = 4 }
if (monthOfYear == 'May')       { moy = 5 }
if (monthOfYear == 'June')      { moy = 6 }
if (monthOfYear == 'July')      { moy = 7 }
if (monthOfYear == 'August')    { moy = 8 }
if (monthOfYear == 'September') { moy = 9 }
if (monthOfYear == 'October')   { moy = 10 }
if (monthOfYear == 'November')  { moy = 11 }
if (monthOfYear == 'December')  { moy = 12 }

var dayOfWeek;
var dayOfMonth = parseInt(dom);
var month = parseInt(moy);
var year = parseInt(y);
var K = year % 100;
var J = (year - K) / 100;

// console.log(moy)

var solve = (dayOfMonth + parseInt((13 * (month + 1) / 5)) + K + parseInt(K / 4) + parseInt(J / 4) + 5 * J) % 7;

if (solve == 0) { dayOfWeek = 'Saturday' };
if (solve == 1) { dayOfWeek = 'Sunday' };
if (solve == 2) { dayOfWeek = 'Monday' };
if (solve == 3) { dayOfWeek = 'Tuesday' };
if (solve == 4) { dayOfWeek = 'Wednsday' };
if (solve == 5) { dayOfWeek = 'Thursday' };
if (solve == 6) { dayOfWeek = 'Friday' };

console.log(dayOfWeek);


//******************************CALENDER*********************************************************************

//6 lines -- 42 spots
var fixedYear;

if (monthOfYear == 'January' || monthOfYear == 'February') { fixedYear = y + 1 }
  else { fixedYear = y };

var spot;
var presentMonth = '     ' + monthOfYear + ' ' + fixedYear;
var presentDays = 'Su Mo Tu We Th Fr Sa';


console.log(presentMonth);
console.log(presentDays);



// var test =

//      July 2015
// Su Mo Tu We Th Fr Sa
//           1  2  3  4
//  5  6  7  8  9 10 11
// 12 13 14 15 16 17 18
// 19 20 21 22 23 24 25
// 26 27 28 29 30 31







