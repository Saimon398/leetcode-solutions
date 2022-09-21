/**
 * @link https://leetcode.com/problems/unique-paths/
 * 
 * @description Return 2D matrix filled by specific filler
 * @param {Number} rows 
 * @param {Number} columns 
 * @param {any} filler 
 * @returns {Object []}
 */
function generate_matrix(rows, columns, filler) {
  const matrix = [];
  for (let i = 0; i < rows; i += 1) {
    const submatrix = [];
    for (let k = 0; k < columns; k += 1) {
      submatrix[k] = filler;
    }
    matrix[i] = submatrix;
  }
  return matrix;
};
/**
 * @description  return the number of possible unique paths to the
 * bottom-right corner
 * @param {Number} rows
 * @param {Number} columns 
 * @returns {Number}
 */
const uniquePaths = function(rows, columns) {
  // Generate grid to count possible ways 
  const grid = generate_matrix(rows, columns, 0);

  // Fill the outermost cell with unit b/c it's the
  // only way to reach neighbor from such cells
  for (let i = 0; i < rows; i += 1) {
      grid[i][0] = 1;
  }
  for (let j = 0; j < columns; j += 1) {
      grid[0][j] = 1;
  }

  // Fill the rest of cells by recurrent formula
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < columns; j += 1) {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[M - 1][N - 1];
};
