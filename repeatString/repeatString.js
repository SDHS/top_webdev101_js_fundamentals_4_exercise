const repeatString = function(str, repeatValue) {
    if (repeatValue < 0) return 'ERROR';
    else if (repeatValue == 0 || str == '') return '';
    else if (repeatValue == 1) return str;
    let newStr = str;
    for (let i = 2; i <= repeatValue; i++) {
        newStr += str;
    }
    return newStr;
}

module.exports = repeatString
