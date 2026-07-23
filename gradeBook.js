function getAverage(array)
{
  let sum = 0;
  for(let i=0;i<array.length;i++)
  {
    sum += array[i];
  }
  return sum/array.length;
}
function getGrade(score)
{
  switch(Math.floor(score/10))
  {
    case 10: return "A+";
    case 9: return "A";
    case 8: return "B";
    case 7: return "C";
    case 6: return "D";
    default: return "F";
  }
}
function hasPassingGrade(score)
{
  if(getGrade(score) !== "F")
  return true;
  else return false;
}
function studentMsg(array,score)
{
  let a;
  if(hasPassingGrade(score))
  a = "You passed the course.";
  else
  a = "You failed the course.";
  return(`Class average: ${getAverage(array)}. Your grade: ${getGrade(score)}. ${a}`);
}
