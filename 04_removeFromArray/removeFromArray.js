const removeFromArray = function() {

let args = Array.from(arguments);
let realArray = args[0];
// console.log(realArray);

for (i = 1; i < args.length; i++) {
   let removeObject = args[i];
   const index = realArray.indexOf(removeObject);
   console.log(index);
   if (index > -1) realArray.splice(index, 1);
   // console.log(realArray);
}
   return realArray;
};
// removeFromArray([1, 2, 3, 4], 7, "tacos");
// Do not edit below this line
module.exports = removeFromArray;
