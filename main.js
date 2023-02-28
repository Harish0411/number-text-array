// number to text..


let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

let num=Number(prompt("Enter any number to print digits text")), l=[];
while(num >0){
     num1  = num%10;
	 num = parseInt(num/10);
	 num1=arr[num1];
	 l.push(num1);
	
}
 console.log(l.reverse());