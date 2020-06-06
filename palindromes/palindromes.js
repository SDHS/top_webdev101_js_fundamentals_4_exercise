const palindromes = function(str) {
    let palindromeCheckString = '';
    for (let i = 0; i < str.length; i++) {
        if (isLetter(str.charAt(i))) {
            palindromeCheckString += str.charAt(i).toLowerCase();
        }
    }
    let copyPalindromeCheckString = palindromeCheckString;
    let j = 0;
    for (let i = palindromeCheckString.length - 1; i >= 0; i--) {
        if (palindromeCheckString.charAt(i) !== copyPalindromeCheckString.charAt(j)) {
            return false;
        }
        j++;
    }
    return true;
}

const isLetter = function(char) {
    return char.toLowerCase() != char.toUpperCase();
}


module.exports = palindromes
