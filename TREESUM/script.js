"use strict"


function treeSum(array) {

  let sum = 0;
	for (let i=0; i<array.length; i++){
	let sum2 = array[i];
		if (Array.isArray(sum2)) {
			sum += treeSum(sum2)}
        else {
		sum += sum2
		}
  };
  return sum;
};

console.log(treeSum([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8]));