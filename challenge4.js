var num = prompt("Enter number you want to convert")

function Numconvert()
 { 
     var minutes = num % 60;
  if (num < 60)
  {
      hours=0;
  } 
     else
     {
     var hours = Math.floor(num / 60);
     }
  return hours + " Hr" + " : " + minutes + " Min";         
}

console.log(Numconvert());
