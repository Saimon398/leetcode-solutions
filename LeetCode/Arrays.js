const s = "God Ding";

const reverseWords = (string) => {
  // Split string into words
  const words = string.split(' ');
  const newWords = [];
  for(let i = 0; i < words.length; i += 1) {
    let newWord = '';
    for (let k = words[i].length - 1; k >= 0; k -= 1) {
      newWord += words[i][k];
    }
    newWords.push(newWord);
  }
  return newWords.join(' ');
};

