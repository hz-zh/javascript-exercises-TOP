const repeatString = function(str, num) {
   if (num < 0) return 'ERROR';
   let stringCat = '';
   for (i = 0; i < num; i++) {
      if (i == 0) stringCat = str;
      else stringCat += str;
   }
   return stringCat;
};

// Do not edit below this line
module.exports = repeatString;
