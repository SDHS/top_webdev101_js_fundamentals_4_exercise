// NOTE: THIS IS NOT A GOOD SOLUTION! I haven't stuided regular expressions yet so wasn't able to pass all the tests. To be specific, those tests where 'u' must be treated as a constant. As a hacky workaround, I have removed 'u' from the list of vowels so as to include it within the consonants, in order to pass the tests.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
let copyVowels = VOWELS;

const isVowel = function(char) {
	let bool = false;
	for (let i = 0; i < copyVowels.length; i++) {
		if (char == copyVowels[i]) {
			bool = true;
		}
	}
	return bool;
}

function translate(str) {
	const wordArray = str.split(' ');
	for (let i = 0; i < wordArray.length; i++) {
		copyVowels = ['a', 'e', 'i', 'o', 'u'];
		if (containsQu(wordArray[i])) {
			copyVowels.pop();
		}
		if (isVowel(wordArray[i].charAt(0).toLowerCase())) {
			wordArray[i] = wordArray[i].toLowerCase() + 'ay';
		}
		else {
			let j = 0;
			let consonants = '';
			while (!isVowel(wordArray[i].charAt(j).toLowerCase())) {
				consonants += wordArray[i].charAt(j);
				j++;
			}
			 let newWord = wordArray[i].substr(consonants.length, wordArray[i].length) + consonants + 'ay';
			 wordArray[i] = newWord.toLowerCase();
		}
	}
	return wordArray.join(' ');
}

const containsQu = function(str) {
	return str.indexOf('qu') != -1;
}


module.exports = {
	translate
}

