import { parseFileToArrayOfStrings } from "./support/helper.ts";

export const resultOfPart1 = (source: string): number => {
  const rows = parseFileToArrayOfStrings(source).map((row) =>
    row.split(":")[1].split("|").map((part) => part.split(" "))
  );
  let result = 0;
  rows.forEach((row) => {
    const winningNumbers = row[0];
    const myNumbers = row[1];
    const winnerChickenDinner = winningNumbers.filter((n) =>
      myNumbers.includes(n) && n !== ""
    );
    if (winnerChickenDinner.length > 0) {
      let rowResult = 1;
      for (let i = 0; i < winnerChickenDinner.length - 1; i++) {
        rowResult *= 2;
      }
      result += rowResult;
    }
  });
  return result;
};

export const resultOfPart2 = (source: string): number => {
  let result = 0;
  const rows = parseFileToArrayOfStrings(source).map((row) =>
    row.split(":")[1].split("|").map((part) => part.split(" "))
  );
  for (let i = 0; i < rows.length; i++) {
    result += countWinningCardsRecursively(i + 1, rows);
  }
  return result;
};

const countWinningCardsRecursively = (
  id: number,
  rows: string[][][],
): number => {
  let result = 0;
  const winningNumbers = rows[id - 1][0];
  const myNumbers = rows[id - 1][1];
  const winnerChickenDinner = winningNumbers.filter((n) =>
    myNumbers.includes(n) && n !== ""
  );
  if (winnerChickenDinner.length > 0) {
    for (let i = 0; i < winnerChickenDinner.length; i++) {
      result += countWinningCardsRecursively(id + i + 1, rows);
    }
  }
  result += 1;
  return result;
};
