const accountId = 22334455
let accountEmail = "radhe@google.com"
var accountPassword = "123456"
accountCity = "varundavan"

let accountState;

//accountId = 2 //not allowed

/*
Perfer not to use var
beacause of issue in block scope and functional scope
*/

accountEmail = "rk@rk.com"
accountPassword = "323232"
accountCity = "Pune"

// console.log(accountId);


console.table([accountId, accountEmail, accountPassword,accountCity, accountState]);