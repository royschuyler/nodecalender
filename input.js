var argv = require('yargs')

var monthOfYear = process.argv[2].toLowerCase().charAt(0).toUpperCase() + process.argv[2].slice(1);
var dom = 1;
var y = process.argv[3];


 // return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)){
    leapYear = true;
  } else {
    leapYear = false;
  }

if (monthOfYear == 'January')   { moy = 13; y = process.argv[3] - 1 }
if (monthOfYear == 'February')  { moy = 14; y = process.argv[3] - 1 }
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

var dayOfMonth = 1;
var month = parseInt(moy);
var year = parseInt(y);
var K = year % 100;
var J = (year - K) / 100;

//ZELLERS EQUATION
var solve = (dayOfMonth + parseInt((13 * (month + 1) / 5)) + K + parseInt(K / 4) + parseInt(J / 4) + 5 * J) % 7;

//jan march may july aug oct dec
if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; leftoverDaysRow1 = '1'; row2Numbers = ' 2  3  4  5  6  7  8'; row3Numbers = ' 9 10 11 12 13 14 15'; row4Numbers = '16 17 18 19 20 21 22' };
if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  leftoverDaysRow1 = '1  2  3  4  5  6  7'; row2Numbers = ' 8  9 10 11 12 13 14'; row3Numbers = '15 16 17 18 19 20 21'; row4Numbers = '22 23 24 25 26 27 28' };
if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  leftoverDaysRow1 = '1  2  3  4  5  6'; row2Numbers = ' 7  8  9 10 11 12 13'; row3Numbers = '14 15 16 17 18 19 20'; row4Numbers = '21 22 23 24 25 26 27' };
if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  leftoverDaysRow1 = '1  2  3  4  5'; row2Numbers = ' 6  7  8  9 10 11 12'; row3Numbers = '13 14 15 16 17 18 19'; row4Numbers = '20 21 22 23 24 25 26' };
if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; leftoverDaysRow1 = '1  2  3  4'; row2Numbers = ' 5  6  7  8  9 10 11'; row3Numbers = '12 13 14 15 16 17 18'; row4Numbers = '19 20 21 22 23 24 25' };
if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; leftoverDaysRow1 = '1  2  3'; row2Numbers = ' 4  5  6  7  8  9 10'; row3Numbers = '11 12 13 14 15 16 17'; row4Numbers = '18 19 20 21 22 23 24' };
if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; leftoverDaysRow1 = '1  2'; row2Numbers = ' 3  4  5  6  7  8  9'; row3Numbers = '10 11 12 13 14 15 16'; row4Numbers = '17 18 19 20 21 22 23' };

//31 DAY MONTHS
if (monthOfYear == 'January' || monthOfYear == 'March' || monthOfYear == 'May' || monthOfYear == 'July' || monthOfYear == 'August' || monthOfYear == 'October' || monthOfYear == 'December')
  { if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; row5Numbers = '23 24 25 26 27 28 29'; row6Numbers = '30 31' };
    if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  row5Numbers = '29 30 31'; row6Numbers = ''  };
    if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  row5Numbers = '28 29 30 31'; row6Numbers = '' };
    if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  row5Numbers = '27 28 29 30 31'; row6Numbers = ''  };
    if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; row5Numbers = '26 27 28 29 30 31'; row6Numbers = ''  };
    if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; row5Numbers = '25 26 27 28 29 30 31'; row6Numbers = ''  };
    if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; row5Numbers = '24 25 26 27 28 29 30'; row6Numbers = ''  }; }

//30 DAY MONTHS
if (monthOfYear == 'April' || monthOfYear == 'June' || monthOfYear == 'September' || monthOfYear == 'November')
  { if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; row5Numbers = '23 24 25 26 27 28 29'; row6Numbers = '30' };
    if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  row5Numbers = '29 30'; row6Numbers = ''  };
    if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  row5Numbers = '28 29 30'; row6Numbers = '' };
    if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  row5Numbers = '27 28 29 30'; row6Numbers = ''  };
    if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; row5Numbers = '26 27 28 29 30'; row6Numbers = ''  };
    if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; row5Numbers = '25 26 27 28 29 30'; row6Numbers = ''  };
    if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; row5Numbers = '24 25 26 27 28 29 30'; row6Numbers = ''  }; }

//28 DAY MONTHS
if (monthOfYear == 'February')
  { if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; row5Numbers = '23 24 25 26 27 28'; row6Numbers = '' };
    if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  row5Numbers = ''; row6Numbers = ''  };
    if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  row5Numbers = '28'; row6Numbers = '' };
    if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  row5Numbers = '27 28'; row6Numbers = ''  };
    if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; row5Numbers = '26 27 28'; row6Numbers = ''  };
    if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; row5Numbers = '25 26 27 28'; row6Numbers = ''  };
    if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; row5Numbers = '24 25 26 27 28'; row6Numbers = ''  }; }

//29 DAY MONTHS
if (monthOfYear === 'February' && leapYear === true )
  { if (solve == 0) { dayOfWeek = 'Saturday'; tester = 18; row5Numbers = '23 24 25 26 27 28 29'; row6Numbers = '' };
    if (solve == 1) { dayOfWeek = 'Sunday';   tester = 0;  row5Numbers = '29'; row6Numbers = ''  };
    if (solve == 2) { dayOfWeek = 'Monday';   tester = 3;  row5Numbers = '28 29'; row6Numbers = '' };
    if (solve == 3) { dayOfWeek = 'Tuesday';  tester = 6;  row5Numbers = '27 28 29'; row6Numbers = ''  };
    if (solve == 4) { dayOfWeek = 'Wednsday'; tester =  9; row5Numbers = '26 27 28 29'; row6Numbers = ''  };
    if (solve == 5) { dayOfWeek = 'Thursday'; tester = 12; row5Numbers = '25 26 27 28 29'; row6Numbers = ''  };
    if (solve == 6) { dayOfWeek = 'Friday';   tester = 15; row5Numbers = '24 25 26 27 28 29'; row6Numbers = ''  }; }

console.log(dayOfWeek);

//they input month and year, day will automatically be set to 1 to see what day of the week the first falls on

var row1 = [];


//*******FIRST ROW FOR LOOP***************
for (i = 0; i < tester; i++) {
    row1.push(' ');
  };
  var spaces = row1.join('');

//****************************** MONTH CALENDER ***********************************

//6 row -- 42 spots
var fixedYear = y;

if (monthOfYear == 'January' || monthOfYear == 'February') { fixedYear = y + 1 }
  else { fixedYear = y };

var spot;
var presentMonth = '     ' + monthOfYear + ' ' + fixedYear;
var presentDays = 'Su Mo Tu We Th Fr Sa';
var test3 = ' ' + spaces + leftoverDaysRow1

console.log(presentMonth);
console.log(presentDays);
console.log(test3);
console.log(row2Numbers);
console.log(row3Numbers);
console.log(row4Numbers);
console.log(row5Numbers);
console.log(row6Numbers);

var space = '       ';
var date = 'April'
var date2 = 'June'
console.log(space, date, space, date );







