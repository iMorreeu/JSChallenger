// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const number = prompt()
function myFunction(n) {
    var par = n % 2 == 0
    
    if (par === true){
        return console.log(par)
    
    }
    return console.log('false')
    }

    myFunction(number)