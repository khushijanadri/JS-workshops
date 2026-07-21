function findElement(array, func) {
  for (const item of array) {
    if (func(item)) {
      return item; // Returns the first item that passes the test
    }
  }
  return undefined; // Returns undefined if no elements pass
}
