const leapYears = function(year) {
   if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) return true;
   else return false;
};

// Do not edit below this line
module.exports = leapYears;


/*if ((year modulo 4 is 0) and (year modulo 100 is not 0))
or (year modulo 400 is 0)*/