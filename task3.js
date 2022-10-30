function resultSum(num1){
    return function(num2){
      return num1 + num2;
    }
  }
  const sum = resultSum(11);
  console.log(sum(22));