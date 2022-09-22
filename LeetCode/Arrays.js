const reverseWords = (string) => {
  const words = string.split(' ');
  const normalizedWords = [];
  for (let i = words.length - 1; i >= 0; i -= 1) {
    if(words[i] !== '') {
      normalizedWords.push(words[i].trim());
    }
  }
  return normalizedWords.join(' ');
};

const s =  "  hello world  ";

console.log(reverseWords(s));