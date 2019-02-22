function  common(str1,str2)
{
	var sone = str1;
	var stwo = str2;
	var output=[];

 for (var i = 0;i< sone.length; i++)
  {
	if (stwo.indexOf(sone[i] )!== -1 && output.indexOf(sone[i])=== -1)
	{
		output.push(sone[i]);
	}
  }
return output.join("");
}
console.log( common("sisiza","saziso"));