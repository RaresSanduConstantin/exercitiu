let missingLetter = ['O','Q','R','S'];

// function findMissingLetter(array){
//     let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let litereArray = array.toString().toLowerCase().split(",")
//     let alphaSliced = [...litereArray]

//     console.log(alphaSliced)
//     let diff = alphaSliced.filter(x => litereArray.indexOf(x) === -1);
//     return diff;
// }

// console.log(findMissingLetter(missingLetter))



    // const startAlphabet = function(arr){
    //     let alfa = []
    //     for(let i=0; i< arr.length; i++){
    //         if(arr[i] === litereArray[i]){
    //             alfa.push(arr[i])
    //         }
    //         return alfa;
    //     }
    // }
    //   console.log( startAlphabet(alphabet))

    function findMissingLetter(array) {
        let first = array[0].charCodeAt(0)
        for (let i = 1; i < array.length; i++) {
          if (first + i !== array[i].charCodeAt(0)) {
            return String.fromCharCode(first + i)
          }
        }
        throw new Error("Invalid input")
      }
      console.log( findMissingLetter(missingLetter))

      function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}

function findMissingLetter(letters) {
    for (var i = 0; i < letters.length; i++) {
      if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
        return String.fromCharCode(letters[i].charCodeAt() + 1);
      }
    }
  }