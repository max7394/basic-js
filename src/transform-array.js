const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}
  const transformedArray = Array.from(arr)
  transformedArray.forEach((e, f) => {
    if (e === '--double-next') {
      transformedArray[f] = transformedArray[f + 1]
    }
    if (e === '--double-prev') {
      transformedArray[f] = transformedArray[f - 1]
    }
    if (e  === '--discard-prev') {
      transformedArray[f] = 'toDelete'
      transformedArray[f - 1] = 'toDelete'
    }
    if (e === '--discard-next') {
      transformedArray[f] = 'toDelete'
      transformedArray[f + 1] = 'toDelete'
    }
  })
  return transformedArray.filter(e => e !== 'toDelete' && e !== undefined)
}

module.exports = {
  transform
};
