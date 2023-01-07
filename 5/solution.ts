function longestPalindrome(s: string): string {
  let result = s[0];
  let resultLength = 1;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > resultLength) {
        result = s
          .split("")
          .slice(left, right + 1)
          .join("");
        resultLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > resultLength) {
        result = s
          .split("")
          .slice(left, right + 1)
          .join("");
        resultLength = right - left + 1;
      }
      left -= 1;
      right += 1;
    }
  }
  return result;
}
