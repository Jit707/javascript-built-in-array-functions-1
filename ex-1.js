let words = ["hello", "world"];

function getWordLengths(words) {
  for (let i= 0 ; i<=words.length ; i++){
    console.log(words.length);
    return words.length
  }
}

const result = words.map(getWordLengths)

console.log(result); // Output: [5, 5]
