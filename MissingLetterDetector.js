function fearNotLetter(string)
{
  let j;
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let startIndex = alpha.indexOf(string[0]);
  for(let i=startIndex,j=0;j<string.length;i++,j++)
  {
    if(alpha[i] !== string[j])
    {
      return alpha[i];
    }
  }
  return undefined;
}
