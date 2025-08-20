function findLargest(a, b, c) {
	
	if(a>=b && a>=c){
		return a;
	}if(b>=a && b>=c){
		return b;
	}
	 
	if(a==b && b==c){
		return 0;
	}
	return c;
  //your code here
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
