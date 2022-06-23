function longestConsec(strarr, k) {
  if (strarr.length < k || strarr.length === 0 || k<= 0) {return ""};
  let lengthArray = [];
  let maxString = '';
  
  for (let i = 0; i < strarr.length; i++) {
      //if (strarr[i] == strarr.length) return;
      let concatString = strarr[i];
      let index = i;
      let count = k;
      while (count > 1) {
        if (!strarr[index+1]) break;
        concatString += strarr[index+1];
        count--;
        index++;
      }
      lengthArray.push(concatString);
      concatString = '';
    }
  
  for (let i = lengthArray.length-1; i >= 0; i--) {
    if (lengthArray[i].length >= maxString.length) {
      maxString = lengthArray[i];
    }
  }
  
  return maxString;
}
