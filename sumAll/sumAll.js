const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    if (!isNumber(num1) || !isNumber(num2)) {
        return 'ERROR';
    }
    let sum = 0;
    let start = num1;
    let end = num2;
    if (num1 > num2) {
        start = num2;
        end = num1;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

const isNumber = function(num) {
    return num === Number(num);
}

console.log(sumAll(10, "90"));

module.exports = sumAll
