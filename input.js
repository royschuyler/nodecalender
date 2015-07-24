var argv = require('yargs')

var monthOfYear;
var moy;
var monthOfYear = process.argv[2].toLowerCase().charAt(0).toUpperCase() + process.argv[2].slice(1);
var dom = 1;
var y = process.argv[3];

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
var tester;
if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18 };
if (solve == 1) { dayOfWeek = 'Sunday'; tester = 0 };
if (solve == 2) { dayOfWeek = 'Monday'; tester = 3 };
if (solve == 3) { dayOfWeek = 'Tuesday'; tester = 6 };
if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9};
if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12 };
if (solve == 6) { dayOfWeek = 'Friday'; tester = 15 };

console.log(dayOfWeek);

//******************************CALENDER LOGIC***************************************************************

//they input month and year, day wil aoutomatically be 1 to see what day of the week the first falls on
var twoSpaces = ' ';
var row1 = [];
// var row2 = [];
// var row3 = [];
// var row4 = [];
// var row5 = [];
// var row6 = [];
console.log(tester)

for (i = 0; i < tester; i++) {
    row1.push(twoSpaces);
  };
  var spaces = row1.join('');




//******************************CALENDER*********************************************************************

//6 row -- 42 spots
var fixedYear;

if (monthOfYear == 'January' || monthOfYear == 'February') { fixedYear = y + 1 }
  else { fixedYear = y };

var spot;
var presentMonth = '     ' + monthOfYear + ' ' + fixedYear;
var presentDays = 'Su Mo Tu We Th Fr Sa';

console.log(presentMonth);
console.log(presentDays);
console.log(spaces, 1)





// var test =

//      July 2015
// Su Mo Tu We Th Fr Sa
//           1  2  3  4
//  5  6  7  8  9 10 11
// 12 13 14 15 16 17 18
// 19 20 21 22 23 24 25
// 26 27 28 29 30 31







