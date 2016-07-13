var a = 1;
var b = 2;
var c;

var sum = 2;

do {

	c = a + b;
  isEven(c);
  max = c;
  a = b + c;
  isEven(a);
  max = a;
  b = c + a;
	isEven(b);
  max = b;

} while(max < 4000000);

function isEven(num) {

	if(num % 2 === 0 && num < 4000000) {
  
  	sum += num;
  
  }

}

alert(sum);