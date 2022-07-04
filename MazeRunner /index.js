function mazeRunner(maze, directions) {
  let answer = '';
  let position = {
    x: 0,
    y: 0
  };
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        position.x = j;
        position.y = i;
      }
    }
  }
  const check = (item, i, arr) => {
    if (position.y == -1 || position.x == -1 || position.x >= maze.length || position.y >= maze.length) {
      answer = 'Dead';
      return;
    }

    if (maze[position.y][position.x] == 3) {
      answer = 'Finish';
      return;
    }

    if (maze[position.y][position.x] === 1) {
      answer = 'Dead';
      return;
    }

    if (i === arr.length - 1) {
      answer = 'Lost';
      return;
    }
  }
  directions.forEach((item, i, arr) => {
    if (answer === 'Finish' || answer === 'Dead' || answer === 'Lost') return;

    switch (item) {
      case 'N': {
        position.y = position.y - 1;
        check(item, i, arr);
        break;
      }
      case 'E': {
        position.x += 1;
        check(item, i, arr);
        break;
      }
      case 'S': {
        position.y = position.y + 1;
        check(item, i, arr);
        break;
      }
      case 'W': {
        position.x = position.x - 1;
        check(item, i, arr);
        break;
      }
    }
  })
  return answer;
}