var month = parseInt(process.argv[2]);
var dayOfMonth = parseInt(process.argv[3]);
var year = parseInt(process.argv[4]);

var dayOfWeek;
var month = 7;
var dayOfMonth = 23;
var year = 2015;
var K = year % 100;
var J = (year - K) / 100;

var solve = (dayOfMonth + parseInt((13 * (month + 1) / 5)) + K + parseInt(K / 4) + parseInt(J / 4) + 5 * J) % 7;

if (solve == 0) { dayOfWeek = 'Saturday' };
if (solve == 1) { dayOfWeek = 'Sunday' };
if (solve == 2) { dayOfWeek = 'Monday' };
if (solve == 3) { dayOfWeek = 'Tuesday' };
if (solve == 4) { dayOfWeek = 'Wednsday' };
if (solve == 5) { dayOfWeek = 'Thursday' };
if (solve == 6) { dayOfWeek = 'Friday' };

console.log(solve);
console.log(dayOfWeek);

