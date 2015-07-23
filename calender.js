// var dayOfWeek = 1;
var dayOfMonth = 9;
var month = 3;
var year = 2015;
var K = 15;
var century = 20;

// console.log(century);

var solve = (dayOfMonth + parseInt((13 * (month + 1) / 5)) + K + parseInt(K / 4) + parseInt(century / 4) + 5 * century) % 7;

console.log(solve);








