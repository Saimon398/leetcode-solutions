import generateMatrix from './generate_matrix.js';

/**
 * @link https://leetcode.com/problems/minimum-path-sum/
 * @description ind a path from top left to bottom right,
 * which minimizes the sum of all numbers along its path.
 * @param {*} grid
 * @returns
 */
const minPathSum = (grid) => {
  const rows = grid.length;
  const columns = grid[0].length;
  const costs = generateMatrix(rows, columns, 0);

  // Cost of the first cell is a price of cell itself
  costs[0][0] = grid[0][0];

  // Outermost cell's cost is a sum of cell's
  // price and previous cell's cost
  for (let i = 1; i < rows; i += 1) {
    costs[i][0] = grid[i][0] + costs[i - 1][0];
  }
  for (let j = 1; j < columns; j += 1) {
    costs[0][j] = grid[0][j] + costs[0][j - 1];
  }
  // Inner cell's cost are calculated by min cost of
  // neighbours and cell's price itself
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < columns; j += 1) {
      costs[i][j] = Math.min(costs[i - 1][j], costs[i][j - 1]) + grid[i][j];
    }
  }
  return costs[rows - 1][columns - 1];
};
