function getDetection(){
    let nChetn = 0, nNeChetn = 0;
  let arr = [0, 4, 9.5, 10, 6, 'null'];
  for (let i = 0; i < arr.length; i++) {
  
      if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
          if (arr[i] % 2 === 0) {
  //       console.log("Число четное.");
              nChetn++;
          } else {
  //      console.log("Число нечетное.");
              nNeChetn++;
          }
      }
  }
  console.log(nChetn + " четных", nNeChetn + " нечетных")
  };
  getDetection();