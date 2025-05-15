function addPrefix(arr, prefix) {
    const prefixedArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      prefixedArr[i] = prefix + arr[i];
    }
  
    return prefixedArr;
  }