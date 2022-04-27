let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [0, 3, 6, 9],
    [6, 8, 0, 2],
];

function logEachMatrixItem(matrix) {
    console.log('\nLog each matrix item:');

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           console.log(`    item {${i}, ${j}} - ${matrix[i][j]}`);
        }
    }
}

logEachMatrixItem(matrix);