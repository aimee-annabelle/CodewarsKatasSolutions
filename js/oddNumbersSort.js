function sortArray(array) {
  let oddSort = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
  let oddCount = 0;
  let result = array.map((arr) => {
    return arr % 2 === 0 ? arr : oddSort[oddCount++];
  });

  // for(let arr of array){
  //   if(arr % 2 !== 0){
  //     result.push(oddSort[oddCount++]);
  //   } else{
  //     result.push(arr);
  //   }
  // }
  return result;
}

sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
sortArray([5, 8, 6, 3, 4]);
