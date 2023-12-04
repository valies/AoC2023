import { parseFileToArrayOfStrings } from "./support/helper.ts";

export const resultOfPart1 = (source: string): number => {
  const rows: string[] = parseFileToArrayOfStrings(source);
  const matrix: string[][] = [];
  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].split("");
    matrix[i] = [];
    for (let j = 0; j < columns.length; j++) {
      const column = columns[j];
      matrix[i][j] = column;
    }
  }
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    let numberCoordinates: { i: number; j: number }[] = [];
    let thisNumber = "";
    for (let j = 0; j < matrix[i].length; j++) {
      const char = matrix[i][j];
      if (checkCharIsANumber(char)) {
        thisNumber += char;
        numberCoordinates.push({ i, j });
      }
      const isLastNumberOfLine = j === matrix[i].length - 1 &&
        thisNumber !== "";
      const isNumberComplete = !checkCharIsANumber(char) && thisNumber !== "";
      if (isLastNumberOfLine || isNumberComplete) {
        let isDone = false;
        const minI = Math.max(0, numberCoordinates[0].i - 1);
        const maxI = Math.min(
          matrix[i].length - 1,
          numberCoordinates[numberCoordinates.length - 1].i + 1,
        );
        for (let i = minI; i <= maxI; i++) {
          if (isDone) break;
          const minJ = Math.max(0, numberCoordinates[0].j - 1);
          const maxJ = Math.min(
            matrix[j].length - 1,
            numberCoordinates[numberCoordinates.length - 1].j + 1,
          );
          for (let j = minJ; j <= maxJ; j++) {
            //Add the number to the result when there is a hit
            if (!isDone && checkCharIsASymbol(matrix[i][j])) {
              result += Number(thisNumber);
              isDone = true;
              break;
            }
          }
        }
        //reset
        thisNumber = "";
        numberCoordinates = [];
      }
    }
  }
  return result;
};

export const resultOfPart2 = (source: string): number => {
  const rows: string[] = parseFileToArrayOfStrings(source);
  const matrix: string[][] = [];
  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].split("");
    matrix[i] = [];
    for (let j = 0; j < columns.length; j++) {
      const column = columns[j];
      matrix[i][j] = column;
    }
  }
  const hits: {
    "i": number;
    "j": number;
    "gearRatio": number;
    "isValidGear": boolean;
  }[] = [];
  for (let i = 0; i < matrix.length; i++) {
    let numberCoordinates: { i: number; j: number }[] = [];
    let thisNumber = "";
    for (let j = 0; j < matrix[i].length; j++) {
      const char = matrix[i][j];
      if (checkCharIsANumber(char)) {
        thisNumber += char;
        numberCoordinates.push({ i, j });
      }
      const isLastNumberOfLine = j === matrix[i].length - 1 &&
        thisNumber !== "";
      const isNumberComplete = !checkCharIsANumber(char) && thisNumber !== "";
      if (isLastNumberOfLine || isNumberComplete) {
        let isDone = false;
        const minI = Math.max(0, numberCoordinates[0].i - 1);
        const maxI = Math.min(
          matrix[i].length - 1,
          numberCoordinates[numberCoordinates.length - 1].i + 1,
        );
        for (let i = minI; i <= maxI; i++) {
          if (isDone) break;
          const minJ = Math.max(0, numberCoordinates[0].j - 1);
          const maxJ = Math.min(
            matrix[j].length - 1,
            numberCoordinates[numberCoordinates.length - 1].j + 1,
          );
          for (let j = minJ; j <= maxJ; j++) {
            if (!isDone && matrix[i][j] === "*") {
              //If we already had a hit at the coordinate, multiply the previous hit gear number with this gear number and set valid
              if (hits.some((hit) => hit.i === i && hit.j === j)) {
                hits.filter((hit) => hit.i === i && hit.j === j)[0]
                  .gearRatio *= Number(thisNumber);
                hits.filter((hit) => hit.i === i && hit.j === j)[0]
                  .isValidGear = true;
              } else { //Save the new hit coordinate as not valid yet
                hits.push({
                  i,
                  j,
                  gearRatio: Number(thisNumber),
                  isValidGear: false,
                });
              }
              isDone = true;
              break;
            }
          }
        }
        //reset
        thisNumber = "";
        numberCoordinates = [];
      }
    }
  }
  return hits.filter((hit) => hit.isValidGear).reduce((a, b) => {
    return a + b.gearRatio;
  }, 0);
};

const checkCharIsANumber = (char: string): boolean => {
  const pattern = /^\d+$/;
  return pattern.test(char);
};

const checkCharIsASymbol = (char: string): boolean => {
  const pattern = /[^a-zA-Z0-9]/g;
  return pattern.test(char) && char !== ".";
};
