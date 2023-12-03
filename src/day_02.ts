import { parseFileToArrayOfStrings } from "./support/helper.ts";

export const resultOfPart1 = (source: string): number => {
  const games: string[] = parseFileToArrayOfStrings(source).map((g) =>
    g.replace(/[^a-zA-Z0-9 ]/g, ":").replace("Game ", "")
  );
  let result = 0;
  games.forEach((game) => {
    const id = Number(game.split(":")[0]);
    const counts = game.split(":");
    let r = 0;
    let g = 0;
    let b = 0;
    counts.forEach((count) => {
      const value = Number(count.split(" ")[1]);
      if (count.includes("red")) {
        if (value > r) r = value;
      } else if (count.includes("green")) {
        if (value > g) g = value;
      } else if (count.includes("blue")) {
        if (value > b) b = value;
      }
    });
    if (r <= 12 && g <= 13 && b <= 14) {
      result += id;
    }
  });
  return result;
};

export const resultOfPart2 = (source: string): number => {
  const games: string[] = parseFileToArrayOfStrings(source).map((g) =>
    g.replace(/[^a-zA-Z0-9 ]/g, ":").replace("Game ", "")
  );
  let result = 0;
  games.forEach((game) => {
    const id = Number(game.split(":")[0]);
    const counts = game.split(":");
    let r = 0;
    let g = 0;
    let b = 0;
    counts.forEach((count) => {
      const value = Number(count.split(" ")[1]);
      if (count.includes("red")) {
        if (value > r) r = value;
      } else if (count.includes("green")) {
        if (value > g) g = value;
      } else if (count.includes("blue")) {
        if (value > b) b = value;
      }
    });
    result += r * g * b;
  });
  return result;
};
