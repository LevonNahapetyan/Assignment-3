function sumOfBinNums(num1, num2) {
    let num1Array = [];
    let num2Array = [];
    for (let i = 0; i <= num1.length - 1; i++){
        num1Array.push(Number(num1[i]));
    }

    for (let i = 0; i <= num2.length - 1; i++){
        num2Array.push(Number(num2[i]));
    }

    if(num1Array.length < num2Array.length) {
        for(let i = num1Array.length; i <= num2Array -1; i++){
            num1Array.unshift(0);
        }
    } else if (num2Array.length < num1Array.length){
        for (let i = num2Array.length; i <= num1Array.length - 1; i++) {
            num2Array.unshift(0);
        }
    }

    let carry = 0;
    let sum = [];
    for (let i = num1Array.length - 1; i >= 0; i--){
        if(num1Array[i] + num2Array[1] === 2) {
            sum[i] = carry;
        }
    }
}

sumOfBinNums(1001, 1111)