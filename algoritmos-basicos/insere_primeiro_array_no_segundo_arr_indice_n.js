function frankenSplice(arr1, arr2, n) {
    let newArr1 = arr1.slice();
    let newArr2 = arr2.slice();
    let result = newArr2.slice(0, n);
  
    result = result.concat(newArr1, newArr2.slice(n));
    console.log(result);
    return result;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);