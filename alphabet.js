let missingLetter = ['O','Q','R','S'];

function findMissingLetter(array){
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let litereArray = array.toString().toLowerCase();
    let litereArrat2= litereArray.split() 
    
    let diff = alphabet.filter(x => litereArrat2.indexOf(x) === -1);
    return diff;
}

console.log(findMissingLetter(missingLetter))