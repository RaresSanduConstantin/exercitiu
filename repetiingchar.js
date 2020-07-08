function largestSubString(str) {
    if(!str.trim()) {
      return "Please enter string";
    }
    const strArray = str.trim().split('');
    let count = 0, maxLength = 0, index;
    for(let i = 0; i<strArray.length; i++) {
      if(strArray[i] === strArray[i+1]) {
        count++;
      } else {
        if(count> maxLength) {
          maxLength = count;
          index=i;
        } 
        count=0;
      }
    }
    
    const subStrIndex = index - maxLength;
    const subString = str.slice(subStrIndex, subStrIndex + maxLength+1)
    
    if(subString) {
      return {index: subStrIndex, length: maxLength + 1, subString: subString };
    }
    
    return "No sub-string found";
  }
  
  const str = "aabbbcd";
  console.log(largestSubString(str)) // {index: 2, length: 3, subString: "bbb", }