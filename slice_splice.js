function frankenSplice(arr1, arr2, n) {
  // Create a copy of arr2 so the original remains untouched
  let localArray = arr2.slice();
  
  // Insert elements from arr1 into localArray at index n
  localArray.splice(n, 0, ...arr1);
  
  return localArray;
}
