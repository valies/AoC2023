import {
  parseFileToArrayOfStrings,
  parseStringToArrayOfStrings,
} from "./support/helper.ts";

export const resultOfPart1 = (source: string): number => {
  const input = parseFileToArrayOfStrings(source).map(
    parseStringToArrayOfStrings,
  );
  return input.map((data) => {
    let first = "";
    let second = "";
    const d = data.map((char) => {
      if (!Number.isNaN(Number(char)) && first == "") {
        first = char;
      }
      if (!Number.isNaN(Number(char)) && first != "") {
        second = char;
      }
      return first + second;
    });
    return d.at(d.length - 1);
  }).map((r) => Number(r)).reduce((a, b) => a + b, 0);
};

export const resultOfPart2 = (source: string): number => {
  const input = parseFileToArrayOfStrings(source).map(
    parseStringToArrayOfStrings,
  );
  const numberStrings: string[][] = [
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
  ];
  let result = 0;
  input.forEach((row) => {
    let first = "";
    let firstIsDone = false;
    let second = "";
    let secondIsDone = false;
    for (let i = 0; i < row.length; i++) {
      if (!firstIsDone) {
        const char = row[i];
        if (!Number.isNaN(Number(char))) {
          first = char;
          firstIsDone = true;
        } else {
          first += char;
          numberStrings.forEach((num) => {
            if (first.includes(num[0])) {
              first = num[1];
              firstIsDone = true;
            }
          });
        }
      }
      if (!secondIsDone) {
        const char = row[row.length - 1 - i];
        if (!Number.isNaN(Number(char))) {
          second = char;
          secondIsDone = true;
        } else {
          second = char + second;
          numberStrings.forEach((num) => {
            if (second.includes(num[0])) {
              second = num[1];
              secondIsDone = true;
            }
          });
        }
      }
      if (firstIsDone && secondIsDone) {
        result += Number(first + second);
        break;
      }
    }
  });
  return result;
};
