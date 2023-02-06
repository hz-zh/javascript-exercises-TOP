const sumAll = function(a, b) {
   let sum = 0;
   if (a < 0 || b < 0) return 'ERROR';
   console.log(typeof(a), typeof(b), 'string');
   if (typeof(b) !== 'number' || typeof(a) !== 'number') return 'ERROR';

   if (a < b) {
      for (i = a; i <= b; i++) {
         sum += i;
      }
   }
   else if (b < a) {
      for (i = b; i <= a; i++) {
         sum += i;
      }
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
