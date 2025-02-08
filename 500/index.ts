function findWords(words: string[]): string[] {
  const firstRow = "qwertyuiop";
  const secondRow = "asdfghjkl";
  const thirdRow = "zxcvbnm";
  const result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordArray = word.split("");
    console.log(wordArray);
    const isFirstRowWord = wordArray.every((item) => {
      if (firstRow.includes(item.toLowerCase())) {
        return true;
      }
      return false;
    });

    if (isFirstRowWord) {
      result.push(word);
      continue;
    }

    const isSecondRowWord = wordArray.every((item) => {
      if (secondRow.includes(item.toLowerCase())) {
        return true;
      }
      return false;
    });

    if (isSecondRowWord) {
      result.push(word);
      continue;
    }

    const isThirdRowWord = wordArray.every((item) => {
      if (thirdRow.includes(item.toLowerCase())) {
        return true;
      }
      return false;
    });

    if (isThirdRowWord) {
      result.push(word);
      continue;
    }
  }

  return result;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
