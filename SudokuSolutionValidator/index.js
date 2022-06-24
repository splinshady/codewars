function validSolution(board){
  let answer = true;
  let array = [];
  const validate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) || arr[i] === 0) {
        answer = false;
      }
    }
  }
  for (let i = 0; i < board.length; i++){
    validate(board[i]);
    for (let j = 0; j < board[i].length; j++){
      if (!array[j]) {
        array[j] = [];
        array[j].push(board[i][j]);
      } else {
        array[j].push(board[i][j]);
      }
      if (i >= 0 && i<3) {
        switch (j) {
          case 0:
          case 1:
          case 2:
            if (!array[9]) {array[9] = []}
            array[9].push(board[i][j]);
            break;
          case 3:
          case 4:
          case 5:
            if (!array[10]) {array[10] = []}
            array[10].push(board[i][j]);
            break;
          case 6:
          case 7:
          case 8:
            if (!array[11]) {array[11] = []}
            array[11].push(board[i][j]);
            break;
        }
      }
      if (i >= 3 && i<6) {
        switch (j) {
          case 0:
          case 1:
          case 2:
            if (!array[12]) {array[12] = []}
            array[12].push(board[i][j]);
            break;
          case 3:
          case 4:
          case 5:
            if (!array[13]) {array[13] = []}
            array[13].push(board[i][j]);
            break;
          case 6:
          case 7:
          case 8:
            if (!array[14]) {array[14] = []}
            array[14].push(board[i][j]);
            break;
        }
      }
      if (i >= 6 && i<9) {
        switch (j) {
          case 0:
          case 1:
          case 2:
            if (!array[15]) {array[15] = []}
            array[15].push(board[i][j]);
            break;
          case 3:
          case 4:
          case 5:
            if (!array[16]) {array[16] = []}
            array[16].push(board[i][j]);
            break;
          case 6:
          case 7:
          case 8:
            if (!array[17]) {array[17] = []}
            array[17].push(board[i][j]);
            break;
        }
      }
    }
  }
  array.forEach((item) => validate(item));
  return answer;
}
