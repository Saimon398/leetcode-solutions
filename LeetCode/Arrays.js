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

const obstacles = [[0,0,1,0],[0,0,0,0],[1,0,1,0], [0,0,0,0]];

const uniquePathsWithObstacles  = (obstacleGrid) => {
  const rows = obstacleGrid.length; 
  const columns = obstacleGrid[0].length;
  const possibleWays = generate_matrix(rows, columns, 0);

  // Fill the outermost cell with unit b/c it's the
  // only way to reach neighbor from such cells
  for (let i = 0; i < rows; i += 1) {
    if(obstacleGrid[i][0]) {
      break;
    }
    possibleWays[i][0] = 1;
  }
  for(let j = 0; j < columns; j += 1) {
    if(obstacleGrid[0][j]) {
      break;
    }
    possibleWays[0][j] = 1;
  }

  // Fill the rest of cells by recurrent formula
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < columns; j += 1) {
      if(obstacleGrid[i][j]) {
        possibleWays[i][j] = 0;
      }
      else {
        possibleWays[i][j] = possibleWays[i - 1][j] + possibleWays[i][j - 1];
      }
    }
  }
  return possibleWays[rows - 1][columns - 1];
};

console.log(uniquePaths2(obstacles));



