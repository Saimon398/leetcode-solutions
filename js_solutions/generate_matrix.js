/**
 * @description Return 2D matrix filled by specific filler
 * @param {Number} rows
 * @param {Number} columns
 * @param {any} filler
 * @returns {Object []}
 */
function generateMatrix(rows, columns, filler) {
  const matrix = [];
  for (let i = 0; i < rows; i += 1) {
    const submatrix = [];
    for (let k = 0; k < columns; k += 1) {
      submatrix[k] = filler;
    }
    matrix[i] = submatrix;
  }
  return matrix;
}

export default generateMatrix;
