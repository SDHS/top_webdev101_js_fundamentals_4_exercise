
// Tried regex for the first time. Solution is most certainly a bit wonky and inelegant, but passes all the tests.

const filteringArray = ['.', ',', '!', '?'];
const snakeCase = function(str) {
    if (isWtfCase(str)) {
        filteringArray.shift();
    }
    let arr = Array.from(str);
    let filteredArray = arr.filter((el) => !filteringArray.includes(el));
    let newStr = filteredArray.join('');
    if (isCamelCase(str)) {
        let modifiedStr = '';
        for (let i = 0; i < newStr.length; i++) {
            if (isUpperCase(newStr.charAt(i))) {
                modifiedStr = newStr.substr(0, i) + '_' + newStr.substr(i, newStr.length);
            }
        }
        newStr = modifiedStr.toLowerCase();
        return newStr;
    }
    newStr = newStr.toLowerCase();
    if (isKebabCase(str)) {
        newStr = newStr.split('-').join('_');
    }
    else if (isWtfCase(str)) {
        newStr = newStr.split('..').join('_');
    }
    else {
        newStr = newStr.split(' ').join('_');
    }
    if (newStr.includes('.')) {
        let modifiedStr = '';
        for (let i = 0; i < newStr.length; i++) {
            if (newStr.charAt(i) != '.') {
                modifiedStr += newStr.charAt(i);
            }
        }
        newStr = modifiedStr;
    }
    return newStr;
}

const isKebabCase = function(str) {
    return str.includes('-');
}

const isWtfCase = function(str) {
    const regex = RegExp(/(^[A-Z][A-Za-z]*\.\.[^\.])+/g)
    return regex.test(str);
}

const isCamelCase = function(str) {
    const regExp = RegExp(/^[a-z]+[A-Z][a-z]+/g)
    return regExp.test(str);
}

const isUpperCase = function(char) {
    return char == char.toUpperCase();
}
module.exports = snakeCase
