function mutation(array)
{
  let target  = array[0].toLowerCase();
  let test = array[1].toLowerCase();
  const letters = test.split('');
  let flag = true;
  for(let i=0;i<letters.length;i++)
  {
    if(!target.includes(letters[i]))
    flag = false;
  }
  return flag;
}
