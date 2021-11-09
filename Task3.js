function reverseTheNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) 
    )                 
  }
  console.log(reverseTheNum(8429));
