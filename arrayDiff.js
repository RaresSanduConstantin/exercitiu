
let arr1 = [-4,6,-9,0,-14,8,1,-2,6,-2,-13,-8];
let arr2 = [-2,6,-9];


function arrayDiff(a, b) {
    let diff = a.filter(x => b.indexOf(x) === -1) 

    return diff;
  }
  console.log(
arrayDiff(arr1,arr2))
