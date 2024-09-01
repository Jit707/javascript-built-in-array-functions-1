let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  for (let i= 0 ; i<words.length ; i++){
    console.log(words.length);
    return words.length >= 5
  }
}

const result = words.filter(get5CharWords)

console.log(result); // Output: ["apple", "elephant"]
