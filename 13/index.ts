function romanToInt(s: string): number {
  let numberConvertedFromRomanToInteger = 0;

  const arrayOfRomans: Array<string> = s.split('');

  const convertRomanLetterToNumber = (romanLetter:string, nextRomanLetter: string): number => {
    let letterConvertedToNumber = 0;
    switch (romanLetter) {
      case "I":
        (nextRomanLetter === "V" || nextRomanLetter === "X") ? letterConvertedToNumber = -1 : letterConvertedToNumber = 1;
        break;
      case "V":
        letterConvertedToNumber = 5;
        break;
      case "X":
        (nextRomanLetter === "L" || nextRomanLetter === "C") ? letterConvertedToNumber = -10 : letterConvertedToNumber = 10;
        break;
      case "L":
        letterConvertedToNumber = 50;
        break;
      case "C":
        (nextRomanLetter === "D" || nextRomanLetter === "M") ? letterConvertedToNumber = -100 : letterConvertedToNumber = 100;
        break;
      case "D":
        letterConvertedToNumber = 500;
        break;
      case "M":
        letterConvertedToNumber = 1000;
        break;
      default:
        letterConvertedToNumber = 0;
    }
    
    return letterConvertedToNumber;
  }

  for (let i=0; i < arrayOfRomans.length; i++) {
    if (!(arrayOfRomans[i+1])) {
      numberConvertedFromRomanToInteger += convertRomanLetterToNumber(arrayOfRomans[i], "");
    } 
    else {
      numberConvertedFromRomanToInteger += convertRomanLetterToNumber(arrayOfRomans[i], arrayOfRomans[i + 1]);
    }
  }

  return numberConvertedFromRomanToInteger;
};


console.log(romanToInt("MCMXCIV"));