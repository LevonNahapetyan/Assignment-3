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
  };

  
  function checkIfPal(num){
    if(reverseTheNum(num) === num){
      return "The number is palindrome"
  } else {
      return "The number is not palindrome"
  }
};

console.log(checkIfPal(190091));