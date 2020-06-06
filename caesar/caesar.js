
const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const caesar = function(str, shiftValue) {
    let encryptedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (isLetter(str.charAt(i))) {
            let newIndex = ALPHABET.indexOf(str.charAt(i).toLowerCase()) + shiftValue;
            while (newIndex >= ALPHABET.length) {
                newIndex = newIndex - ALPHABET.length;
            }
            while (newIndex < 0) {
                newIndex = ALPHABET.length + newIndex;
            }
            if(isUpperCase(str.charAt(i))) {
                encryptedStr += ALPHABET[newIndex].toUpperCase();
            }
            else {
                encryptedStr += ALPHABET[newIndex];
            }
        }
        else {
            encryptedStr += str.charAt(i);
        }
    }
    return encryptedStr;
}

const isLetter = function(char) {
    return char.toLowerCase() != char.toUpperCase();
}

const isUpperCase = function(char) {
    return char === char.toUpperCase();
}


module.exports = caesar
