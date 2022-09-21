// /**
//  * Number 3
//  * @description Return length of longest substring
//  * without repetitions
//  * @param {String} string
//  * @returns
//  */
// const getLongestSubstring = (string) => {
//   let sequence = [];
//   let maxLength = 0;

//   for (const char of string) {
//     const index = sequence.indexOf(char);
//     sequence.push(char);
//     if (index !== -1) {
//       sequence = sequence.slice(index + 1);
//     }
//     const sequenceLength = sequence.length;
//     if (sequenceLength > maxLength) {
//       maxLength = sequenceLength;
//     }
//   }
//   return maxLength;
// };

// /**
//  * Number 9
//  * @description Check if given number is a palindrome
//  * @param {Number} number
//  * @returns {Boolean}
//  */
// const isPalindrome = (number) => {
//   const stringified = number.toString();
//   for (let i = 0, j = stringified.length - 1; i < j; i += 1, j -= 1) {
//     if (string[i] !== string[j]) {
//       return false;
//     }
//   }
//   return true;
// };

// /**
//  * Number 70
//  * @description You are climbing a staircase. It takes <number> steps to reach the top.
//  * Each time you can either climb 1 or 2 steps.
//  * In how many distinct ways can you climb to the top?
//  * @param {Number} number Number of stairs
//  * @returns {Number}
//  */
// const climbStairs = function (number) {
//   const F = new Array(number + 1).fill(0);
//   F[0] = 0;
//   F[1] = 1;
//   F[2] = 2;
//   for (let i = 3; i < number + 1; i += 1) {
//     F[i] = F[i - 2] + F[i - 1];
//   }
//   return F[number];
// };

// /**
//  * Number 58
//  * @description Return the length of the last word in the string.
//  * @param {String} string
//  * @returns {Number}
//  */
// const lengthOfLastWord = (string) => {
//   const normalizedString = string
//     .split(' ')
//     .map((word) => word.trim())
//     .filter((word) => word !== '');
//   const indexOfLastWord = normalizedString.length - 1;
//   return normalizedString[indexOfLastWord].length;
// };

// const twoSum = (nums, target) => {
//   // key: Number that adds up to target
//   // value: Index the number is at
//   const twoSum = {};

//   // Iterate through nums using indices b/c we need the indices
//   // for the final ads
//   for(let i = 0; i < nums.length; i += 1) {
//     const currentNumber = nums[i];
//     // Case 1: We found a pair that adds up to target
//     if(currentNumber in twoSum) {
//       return [twoSum[currentNumber], i];
//     }
//     // Case 2: Add a new entry for the current number
//     else {
//       twoSum[target - currentNumber] = i;
//     }
//   }
//   // If we go through the entire for loop without returning
//   // there's no valid answe
//   return -1;
// };


// // Решение задачи через Решето Эратосфена. 

// const countPrimes = (number, counter = 0) => {
//   const primeNumbers = new Array(number).fill(true);
//   primeNumbers[0] = primeNumbers[1] = false;
//   for (let i = 2; i < number; i += 1) {
//     if(primeNumbers[i]) {
//       for (let j = 2 * i; j < number; j += i) {
//         primeNumbers[j] = false;
//       }
//       counter += 1;
//     }
//   }
//   return counter;
// };

function find_the_way_of_highest_cost(N, M, prices) {
  const costs = generate_matrix(N, M, 0);
  costs[0][0] = prices[0][0];
  for (let i = 1; i < N; i += 1) {
    costs[i][0] = prices[i][0] + costs[i - 1][0];
  }
  for (let j = 1; j < M; j += 1) {
    costs[0][j] = prices[0][j] + costs[0][j - 1];
  }
  for (let i = 1; i < N; i += 1) {
    for (let j = 1; j < M; j += 1) {
      costs[i][j] = Math.max(costs[i - 1][j], costs[i][j - 1]) + prices[i][j];
    }
  }
  // ВОССТАНОВЛЕНИЕ МАРШРУТА
  const wayback = [];
  let i = N - 1;
  let j = M - 1;
  while (i !== 0 && j !== 0) {
    wayback.push([i, j]);
    const prev_max_cost = Math.max(costs[i - 1][j], costs[i][j - 1]);
    if (prev_max_cost === costs[i - 1][j]) {
      i -= 1;
    }
    else if (prev_max_cost === costs[i][j - 1]) {
      j -= 1;
    }
    else {
      i -= 1;
      j -= 1;
    }
  }
  return wayback;
};

const grid = [[1,3,1],[1,5,1],[4,2,1]];

