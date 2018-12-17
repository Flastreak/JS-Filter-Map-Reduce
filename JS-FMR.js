let numbers = [1,2,3,4,5,6];
function isEven(x){ 
	return x % 2 === 0; 
}

function double(x){
	return x*2;
}

function sum(total){
	return total;
}

let evenNumbers = numbers.filter(isEven);
let doubleNumbers = numbers.map(double);
let total = numbers.reduce(sum);

console.log(evenNumbers);
console.log(doubleNumbers);
console.log(total);