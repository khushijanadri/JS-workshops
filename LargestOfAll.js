function largestOfAll(array)
{
  const newArray = [];
  for(let i=0;i<array.length;i++)
  {
    let max = -Infinity;
    for(let j=0;j<array[i].length;j++)
    {
      if(array[i][j] > max)
      max = array[i][j];
    }
    newArray.push(max);
  }
  return newArray;
}
