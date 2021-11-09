function checkIfPrime(num) {

    if(num === 1){
        return false;
    } else if (num === 2){
        return true; 
    } else {
        for(let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
            if(num  % divisor === 0) {
                return false;
            }
        }
        return true;
    }
}

function range(firstEl, lastEl) {
    let list = [];
    let x = firstEl;

    while (x <= lastEl){
        if(checkIfPrime(x) === true){
            list.push(x);
        }
        x++
    }
    
    console.log(list);

}

range(15, 60);
