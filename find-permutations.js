/**
 * @param {Array} numArray
 */
const findPermutations = (numArray) => {
   let resultArray = [];
   helper(0, numArray, resultArray);
   return resultArray;
};

/**
 * @param {Number} index
 * @param {Array} numArray
 * @param {Array} resultArray
 */
const helper = (index, numArray, resultArray) => {
   if (index === numArray.length - 1) {
      resultArray.push(numArray.slice());
   } else {
      for (let valueIndex = index; valueIndex < numArray.length; valueIndex++) {
         swapArrayElements(index, valueIndex, numArray);
         helper(index + 1, numArray, resultArray);
         swapArrayElements(index, valueIndex, numArray);
      }
   }
};
/**
 * @param {*} firstElem
 * @param {*} secondElem
 * @param {Array} numArray
 */
const swapArrayElements = (firstElem, secondElem, numArray) => {
   let tempVal = numArray[firstElem];
   numArray[firstElem] = numArray[secondElem];
   numArray[secondElem] = tempVal;
}

console.log('Permutations:',findPermutations([1,2,3]));

export default {findPermutations, swapArrayElements, helper}

