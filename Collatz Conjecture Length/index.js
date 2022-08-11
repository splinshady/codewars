function collatz(n) {
  let sequence = [n];
  while (n !== 1) {
    n % 2 === 0 ? n = n / 2 : n = n * 3 + 1;
    sequence.push(n)
  }
  return sequence.length
}