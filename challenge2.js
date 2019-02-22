var s1 = prompt ("enter first side");
var s2 = prompt ("enter second side");
var s3 = prompt ("enter third side");

function Triangle()
{
	var side =(s1+s2+s3)/2;
	var totalA = Math.sqrt(side *((side-s1)*(side-s2)*(side-s3)));
	document.write(totalA);
	return totalA;
}
console.log(Triangle());
