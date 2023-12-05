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

export const resultOfPart1Reworked = (source: string): number => {
  const rows = parseFileToArrayOfStrings(source).map((row) =>
    row.split(":")[1].split("|").map((part) => part.split(" "))
  );
  let result = 0;
  const winningCards = findWinningCards(rows);
  winningCards.forEach((card) => {
    if (card.wins < 2) {
      result += 1;
    } else {
      result += Math.pow(2, card.wins-1) ;
    }
  });
  return result;
};

const findWinningCards = (
  rows: string[][][],
): { id: number; wins: number }[] => {
  const winningCards: { id: number; wins: number }[] = [];
  for (let i = 0; i < rows.length; i++) {
    const winningNumbers = rows[i][0];
    const myNumbers = rows[i][1];
    const winnerChickenDinner = winningNumbers.filter((n) =>
      myNumbers.includes(n) && n !== ""
    );
    if (winnerChickenDinner.length > 0) {
      for (let j = 0; j < winnerChickenDinner.length; j++) {
        if (winningCards.some((c) => c.id === i + 1)) {
          winningCards.filter((c) => c.id === i + 1)[0].wins += 1;
        } else {
          winningCards.push({
            id: i + 1,
            wins: 1,
          });
        }
      }
    }
  }
  return winningCards;
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
