/* If the number is prime, the output is True, if not then False */

function checkIfPrime(num) {

    if(num === 1){
        return false;
    } else if (num === 2){
        return true; 
    } else {
        for(let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
            if(num % divisor === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(checkIfPrime(41));