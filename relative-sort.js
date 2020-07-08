let numArray = [1, 2, 3, 4, 7, 16];

/**
 * @param {Array} numArray
 */
const relativeSort = (numArray) => {
   const sortedArray = numArray.sort((a, b) => {
      return a - b;
   });
   const oddNum = sortedArray.filter((number => number % 2 !== 0));
   const evenNum = sortedArray.filter((number => number % 2 === 0));
   const resultArray = ([...oddNum, ...evenNum]);
   return resultArray;
}


console.log('Relative Sort:',relativeSort(numArray));

module.exports = relativeSort;