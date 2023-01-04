function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  const subStrings: string[] = [];
  const sizes: number[] = [];
  let aux = 1;
  const auxObject = {};
  for (let i = 0; i < s.length; i++) {
    if (!auxObject[aux]) {
      auxObject[aux] = [];
    }
    if (auxObject[aux].includes(s[i])) {
      subStrings.push(auxObject[aux]);
      sizes.push(auxObject[aux].length);
      aux++;
      auxObject[aux] = [];
      auxObject[aux].push(
        ...auxObject[aux - 1].slice(auxObject[aux - 1].lastIndexOf(s[i]) + 1)
      );
      if (auxObject[aux][auxObject[aux].length - 1] !== s[i]) {
        auxObject[aux].push(s[i]);
      }
      continue;
    }
    auxObject[aux].push(s[i]);
  }
  subStrings.push(auxObject[aux]);
  sizes.push(auxObject[aux].length);
  console.log(subStrings);
  console.log(sizes);
  return Math.max(...sizes);
}
