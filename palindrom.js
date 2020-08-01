/* const input = "vannavoicsdjhsjandmsnd"; */
const input = 'banana';
const charactersMap = new Map();

// stores all the instances of a character in the given string in a map
for (let i = 0; i < input.length; i++) {
  if (charactersMap.has(input[i])) {
    let value = charactersMap.get(input[i]);
    value = [...value, i];
    charactersMap.set(input[i], value);
    continue;
  }
  charactersMap.set(input[i], [i]);
}
let pairs = [];

// filters all the pairs that start and end with same charcter
for (let value of charactersMap.values()) {
  if (value.length === 2) {
    pairs.push(value);
    continue;
  }
  // when a character has more than two instances in the string
  value.forEach((eachValue, index) => {
    for (let i = index + 1; i < value.length; i++) {
      pairs.push([eachValue, value[i]]);
    }
  });
}

if (pairs.length === 0) {
  console.log(`no palindrome available`);
  
}

function isPalindrome(start, end) {
  if (end - start <= 1) {
    return false;
  }

  for (let i = start, j = end; j >= i; i++, j--) {
    if (input[i] !== input[j]) {
      return false;
    }
  }

  return true;
}
// filters only palindromes
let palindromes = pairs.filter(pair => isPalindrome(pair[0], pair[1]));

if (palindromes.length === 0) {
  console.log(`no palindrome available`);
  
}

// maps all the palindromes with their length as key and positions as value
// inorder to find the maximum length and their positions easily
let palindromesMap = new Map();

palindromes.forEach(palindrome =>
  palindromesMap.set(palindrome[1] - palindrome[0] + 1, palindrome)
);

let largestPalindromeLength = Math.max(...palindromesMap.keys());
let lPalindromeStart = palindromesMap.get(largestPalindromeLength)[0];
let lPalindromeEnd = palindromesMap.get(largestPalindromeLength)[1];
let largestPalindrome = input.slice(lPalindromeStart, lPalindromeEnd + 1);

console.log(`largest paldindrome: ${largestPalindrome} `);