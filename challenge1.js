//boolean true;
var num1 = prompt ("Enter the first number");
var num2 = prompt("Enter the second number");

function checkNums() 
{
	var sum = num1 + num2;
	if (num1 == 65 || num2 == 65 || sum == 65)
	{
		return true;
	}
	else 
		return false;
}

console.log(checkNums);
