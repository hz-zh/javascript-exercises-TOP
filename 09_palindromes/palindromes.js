const palindromes = function (string) {
let str = string.toLowerCase();
let strArr = Array.from(str);
let filtered = strArr.filter(function(ch) {
   if (ch == ',') return false;
   else if (ch == ' ') return false;
   else if (ch == '.') return false;
   else if (ch == '!') return false;
   else return true;
})
let reversed = [...filtered].reverse();
if (reversed.toString() == filtered.toString()) return true;
else if (reversed.toString() != filtered.toString()) return false;
  
  //if (strArr.reverse() == strArr) return true;
  //else return false;
};

// Do not edit below this line
module.exports = palindromes;
