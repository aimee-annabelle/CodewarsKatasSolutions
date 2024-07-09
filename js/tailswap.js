function tailSwap(arr) {
    //   let strArr = arr.map(a => a.split(':'));
    //   [strArr[0][1], strArr[1][1]] = [strArr[1][1], strArr[0][1]];
    //   return strArr.map(a => a.join(':'))
      
      
    //   retrieve the two different strings from the original array
    //   separete each string to get the values
    //   swap the values to have the intended output
      
    //   const arr1 =  arr[0].split(':')
    //   const arr2 = arr[1].split(':')
    //   return [`${arr1[0]}:${arr2[1]}`,`${arr2[0]}:${arr1[1]}`]
      
      const [a, b] = arr;
      const [a1, a2] = a.split(":");
      const [b1, b2] = b.split(":");
      return [`${a1}:${b2}`, `${b1}:${a2}`]
    }