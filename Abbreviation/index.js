function abbreviate(string) {
  const abbreviateMatch = (match) => {
    if (/-/g.test(match)) {
      return match.split('-').map((item) => item.length > 3 ? abbreviateMatch(item) : item).join('-');
    }
    let arrayOfLetter = match.split('');
    let arrayOfDeletedLetter = arrayOfLetter.splice(1, arrayOfLetter.length - 2);
    arrayOfLetter.splice(1, 0, arrayOfDeletedLetter.length);
    let abbreviateString = arrayOfLetter.join('');
    return abbreviateString;
  }

  return string.replace(/[\w-]{4,}/g, abbreviateMatch);
}