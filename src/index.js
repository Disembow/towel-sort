
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];
  if (matrix === undefined) {
    newMatrix
  } else {
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            newMatrix.push(matrix[i]);
        } else {
            newMatrix.push(matrix[i].reverse());
        }
    }
  }  
  return newMatrix.flat();
}
