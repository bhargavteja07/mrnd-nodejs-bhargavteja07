
exports.Sum = function(num1, num2){
	return num1+num2;
	
}

exports.SumOfArray = function(arrayOfNums){
	var sum = 0;
for( var i = 0; i < arrayOfNums.length; i++ ){
    sum += parseInt( arrayOfNums[i], 10 ); //don't forget to add the base
}
return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	 var unique=[];

    for(var i=0;i<arrayOfNums.length;i++)
        {
        var str=arrayOfNums[i];
        if(unique.indexOf(str)==-1)
            {
            unique.push(str);
            }
        }		
sum=0;
for( var i = 0; i < unique.length; i++ ){
    sum += unique[i]; 
}
return sum;	
}

exports.ReverseString = function(str){

var s = "";
for (var i = str.length - 1; i >= 0; i--){
    s += str[i];
}
return s;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){

arrayOfStrings.reverse();
return arrayOfStrings;
}