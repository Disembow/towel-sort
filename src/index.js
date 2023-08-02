// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newMatrix = [];

  matrix && matrix.map((e, i) => (i % 2 === 0 ? newMatrix.push(e) : newMatrix.push(e.reverse())));

  return newMatrix.flat();
};
