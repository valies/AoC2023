import { parseFileToArrayOfStrings } from "./support/helper.ts";

export const resultOfPart1 = (source: string): number => {
  const sequences = parseFileToArrayOfStrings(source).map((s) => {
    return s.split(" ").map((n) => Number(n));
  });
  let result = 0;
  sequences.forEach((sequence) => {
    //Calculate histories
    const histories = calculateHistories(sequence);
    //Extrapolate histories
    for (let i = histories.length - 1; i >= 0; --i) {
      if (i === histories.length - 1) {
        histories[i].push(0);
      } else {
        const prev = histories[i][histories[i].length - 1];
        const diff = histories[i + 1][histories[i + 1].length - 1];
        histories[i].push(prev + diff);
      }
    }
    //Add to result
    result += histories[0][histories[0].length - 1];
  });
  return result;
};

export const resultOfPart2 = (source: string): number => {
  const sequences = parseFileToArrayOfStrings(source).map((s) => {
    return s.split(" ").map((n) => Number(n));
  });
  let result = 0;
  sequences.forEach((sequence) => {
    //Calculate histories
    const histories = calculateHistories(sequence);
    //Extrapolate histories
    for (let i = histories.length - 1; i >= 0; --i) {
      if (i === histories.length - 1) {
        histories[i].unshift(0);
      } else {
        const prev = histories[i][0];
        const diff = histories[i + 1][0];
        histories[i].unshift(prev - diff);
      }
    }
    //Add to result
    result += histories[0][0];
  });
  return result;
};

const calculateHistories = (sequence: number[]): number[][] => {
  const histories: number[][] = [];
  histories.push(sequence);
  let historyIndex = 0;
  while (true) {
    const history: number[] = [];
    for (let i = 0; i < histories[historyIndex].length - 1; i++) {
      history.push(histories[historyIndex][i + 1] - histories[historyIndex][i]);
    }
    histories.push(history);
    if (history.some((h) => h !== 0)) {
      historyIndex++;
    } else {
      break;
    }
  }
  return histories;
};
