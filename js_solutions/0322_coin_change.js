/**
 * @link https://leetcode.com/problems/coin-change/
 * @description You are given an integer array coins representing 
 * coins of different denominations and an integer amount 
 * representing a total amount of money. Return the fewest number of coins 
 * that you need to make up that amount. If that amount of money 
 * cannot be made up by any combination of the coins, return -1.
 * @param {Object []} coins 
 * @param {Number} totalAmount 
 * @returns {Number}
 */
const coinChange = (coins, totalAmount) => {
  const coinsToPayAmount = new Array(totalAmount + 1).fill(Infinity);
  coinsToPayAmount[0] = 0;

  for(let amount = 1; amount < totalAmount + 1; amount += 1) {
    for(let denom = 0; denom < coins.length; denom += 1) {
      const difference = amount - coins[denom];

      if(difference >= 0 && coinsToPayAmount[difference] < coinsToPayAmount[amount]) {
        coinsToPayAmount[amount] = coinsToPayAmount[difference];
      }
    }
    coinsToPayAmount[amount] += 1;
  }
  return coinsToPayAmount[totalAmount] === Infinity ? -1 : coinsToPayAmount[totalAmount];
};

