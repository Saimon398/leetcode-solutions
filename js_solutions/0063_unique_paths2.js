import generateMatrix from './generate_matrix.js';

/**
 * @link https://leetcode.com/problems/unique-paths-ii/
 * @description Return the number of possible unique paths
 * to the right-bottom corner of grid
 * @param {Object []} obstacleGrid
 * @returns {Number}
 */
export default (obstacleGrid) => {
  if (!(obstacleGrid instanceof Object)) {
    throw new Error('Input data must be type of Array');
  }
  const rows = obstacleGrid.length;
  const columns = obstacleGrid[0].length;
  const possibleWays = generateMatrix(rows, columns, 0);

  // Fill the outermost cell with unit b/c it's the
  // only way to reach neighbor from such cells
  for (let i = 0; i < rows; i += 1) {
    if (obstacleGrid[i][0]) {
      break;
    }
    possibleWays[i][0] = 1;
  }
  for (let j = 0; j < columns; j += 1) {
    if (obstacleGrid[0][j]) {
      break;
    }
    possibleWays[0][j] = 1;
  }

  // Fill the rest of cells by recurrent formula
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < columns; j += 1) {
      if (obstacleGrid[i][j]) {
        possibleWays[i][j] = 0;
      } else {
        possibleWays[i][j] = possibleWays[i - 1][j] + possibleWays[i][j - 1];
      }
    }
  }
  return possibleWays[rows - 1][columns - 1];
};
