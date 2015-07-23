var argv = require('yargs')

var moy = process.argv[2].toLowerCase();
var dom = process.argv[3];
var y = process.argv[4];

if (moy == 'january')   { moy = 13; y = process.argv[4] - 1}
if (moy == 'februrary') { moy = 14; y = process.argv[4] - 1 }
if (moy == 'march')     { moy = 3 }
if (moy == 'april')     { moy = 4 }
if (moy == 'may')       { moy = 5 }
if (moy == 'june')      { moy = 6 }
if (moy == 'july')      { moy = 7 }
if (moy == 'august')    { moy = 8 }
if (moy == 'september') { moy = 9 }
if (moy == 'october')   { moy = 10 }
if (moy == 'november')  { moy = 11 }
if (moy == 'december')  { moy = 12 }

var dayOfWeek;
var dayOfMonth = parseInt(dom);
var month = parseInt(moy);
var year = parseInt(y);
var K = year % 100;
var J = (year - K) / 100;

var solve = (dayOfMonth + parseInt((13 * (moy + 1) / 5)) + K + parseInt(K / 4) + parseInt(J / 4) + 5 * J) % 7;

if (solve == 0) { dayOfWeek = 'Saturday' };
if (solve == 1) { dayOfWeek = 'Sunday' };
if (solve == 2) { dayOfWeek = 'Monday' };
if (solve == 3) { dayOfWeek = 'Tuesday' };
if (solve == 4) { dayOfWeek = 'Wednsday' };
if (solve == 5) { dayOfWeek = 'Thursday' };
if (solve == 6) { dayOfWeek = 'Friday' };

console.log(dayOfWeek);







