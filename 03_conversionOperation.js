let score = "sushil"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);   //Result => NaN => Not A Number...

// "33" => 33
// "33abc" =>NaN
//"true" => 1; flase => 0


let isLoggedIn = "sushil"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// jab app 1 likh te ho obuisely => true main convert hota hai;aur app 0 likh dete ho to wo => false main convert hota hai
// jab humne empty string ("") ko use kra to value aayi => false 
// Aur jab humne empty string ke andar value value add kr di ("sushil") to uski value aayi => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);

// actually kya type hua hai kya sahi main wo number string ban gay hai to us ke liye

console.log(typeof stringNumber);