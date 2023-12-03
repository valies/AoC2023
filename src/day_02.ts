import { parseFileToArrayOfStrings } from "./support/helper.ts";

export const resultOfPart1 = (source: string): number => {
  const games: string[] = parseFileToArrayOfStrings(source).map((g) =>
    g.replace(/[^a-zA-Z0-9 ]/g, ":").replace("Game ", "")
  );
  let result = 0;
  games.forEach((game) => {
    const id = Number(game.split(":")[0]);
    const counts = game.split(":");
    const rgb = getRgbResult(counts);
    if (rgb["red"] <= 12 && rgb["green"] <= 13 && rgb["blue"] <= 14) {
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
    const counts = game.split(":");
    const rgb = getRgbResult(counts);
    result += rgb["red"] * rgb["green"] * rgb["blue"];
  });
  return result;
};

const getRgbResult = (counts: string[]): { [key: string]: number } => {
  const rgb = { "red": 0, "green": 0, "blue": 0 };
  counts.forEach((count) => {
    const value = Number(count.split(" ")[1]);
    if (count.includes("red") && value > rgb["red"]) {
      rgb["red"] = value;
    } else if (count.includes("green") && value > rgb["green"]) {
      rgb["green"] = value;
    } else if (count.includes("blue") && value > rgb["blue"]) {
      rgb["blue"] = value;
    }
  });
  return rgb;
};
