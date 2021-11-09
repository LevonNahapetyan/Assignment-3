function inverse(binaryNum) {

    let result = [];
    for (let i = 0; i <= binaryNum.length - 1; i++) {
        if (binaryNum.charAt(i) === "1") {
            result.push(0);
        } else{
            result.push(1);
        }
    }
    console.log(result.join(""));

}

inverse("11010110")