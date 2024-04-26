function solution(phoneBook) {
  for (let i = 0; i < phoneBook.length - 1; i++) {
    for (let j = i + 1; j < phoneBook.length; j++) {
      if (phoneBook[j].length < phoneBook[i].length) {
        if (phoneBook[i].slice(0, phoneBook[j].length) === phoneBook[j]) {
          return false;
        }
      } else {
        if (phoneBook[j].slice(0, phoneBook[i].length) === phoneBook[i]) {
          return false;
        }
      }
    }
  }

  return true;
}
