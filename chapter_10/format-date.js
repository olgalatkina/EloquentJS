// const ordinal = require('ordinal');
// const { days, months } = require('date-names');

import ordinal from 'ordinal';
import { days, months } from 'ordinal';

const formatDate = function (date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag === 'YYYY') return date.getFullYear();
    if (tag === 'M') return date.getMonth();
    if (tag === 'MMMM') return months[date.getMonth()];
    if (tag === 'D') return date.getDate();
    if (tag === 'Do') return ordinal(date.getDate());
    if (tag === 'dddd') return days[date.getDate()];
  });
}

console.log(days.length);
console.log(new Date(2017, 9, 13)); // -> Fri Oct 13 2017 00:00:00 GMT+0300 (Moscow Standard Time)
console.log(formatDate(new Date(2017, 9, 13), 'dddd the Do')); // -> Friday the 13th

export default formatDate;
