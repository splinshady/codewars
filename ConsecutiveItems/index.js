function consecutive(arr, a, b) {
  let answer = false;
  arr.forEach((item, index, array) => {
    if (item === a && array[index+1] === b) {
      answer = true;
    }
    if (item === a && array[index-1] === b) {
      answer = true;
    }
  })
  return answer;
}
