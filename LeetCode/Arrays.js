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

const longestCommonSubsequence = (A, B) => {
  const F = generate_matrix(A.length + 1, B.length + 1, 0);
  // Заполняем слева направо
  for (let i = 1; i < A.length + 1; i += 1) {
    for (let j = 1; j < B.length + 1; j += 1) {
      //  СРАВНИВАЕМ 2 ПОСЛЕДНИХ ЭЛЕМЕНТА A[i] и B[j], но они находятся под индексами i - 1, j - 1
      if (A[i - 1] === B[j - 1]) {
        F[i][j] = 1 + F[i - 1][j - 1];
      }
      else {
        F[i][j] = Math.max(F[i - 1][j], F[i][j - 1]);
      }
    }
  }
  return F[A.length][B.length];
};

const text1 = "abc";
const text2 = 'def';
console.log(largest_common_subsequence(text1, text2));
