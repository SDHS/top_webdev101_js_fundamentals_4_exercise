function add (op1, op2) {
	return op1 + op2;
}

function subtract (op1, op2) {
	return op1 - op2;
}

function sum (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function multiply (arr) {
	let multiplication = 1;
	for (let i = 0; i < arr.length; i++) {
		multiplication *= arr[i];
	}
	return multiplication;
}

function power(op1, op2) {
	return op1 ** op2;	
}

function factorial(num) {
	if (num == 0) {
		return 1;
	}
	return num * factorial(num - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}