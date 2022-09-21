
// Нужно найти префикс / Z функцию

// const z_function_advanced = (s) => {
//   const z = new Array(s.length).fill(0);
//   let left = 0;
//   let right = 0;
//   for (let i = 1; i < s.length; i += 1) {
//     // ПЕРВЫЙ СЛУЧАЙ 
//     if (i <= right) {
//       // ЕСЛИ ИНДЕКС ПРИНАДЛЕЖИТ САМОМУ ПРАВОМУ ОТРЕЗКУ СОВПАДЕНИЯ, ТО ВЫЬИРАЕМ МИНИМАЛЬНОЕ
//       z[i] = Math.min(right - i + 1, z[i - left])
//     }
//     while (i + z[i] < s.length && s[z[i]] === s[i + z[i]]) {
//       z[i] += 1;
//     }
//     if (i + z[i] - 1 > right) {
//       left = i;
//       right = i + z[i] - 1;
//     }
//   }
//   return z;
// };

// // Прописываем КМП

// const strStr = (string, substring) => {
//   const separator = '#';
//   const zFunction = z_function_advanced(`${substring}${separator}${string}`);
//   for(let i = 0; i < zFunction.length; i += 1) {
//     if(zFunction[i] === substring.length) {
//       return i - substring.length - 1;
//     }
//   }
//   return -1;
// };

// const haystack = 'hellodarling';
// const needle = 'odar'; 

// console.log(strStr(haystack, needle));

const haystack = 'leetcode';
const needle = 'leeto'; 

const findFirstIndex = (string, substring) => {
  for(let i = 0; i < string.length; i += 1) {
    if(string.slice(i, substring.length + i) === substring) {
      return i;
    }
  }
  return -1;
};

console.log(findFirstIndex(haystack, needle));

