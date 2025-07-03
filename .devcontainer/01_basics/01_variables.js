const accountId = 144553
let accountEmail = "prashant@gmail.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState = "Karnataka"

// accountId = 2 // Not allowed
accountEmail = "hc@gmail.com"
accountPassword = "24242"
accountCity = "Deoghar"
accountState = "Jharkhand"
console.log(accountId);

/*
Prefer not to use var
because of issues of block scope and functional scope

*/
console.table([accountId,accountEmail, accountPassword, accountCity, accountState])

