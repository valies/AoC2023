import { parseFileToArrayOfStrings } from "./support/helper.ts";

export const resultOfPart1 = (source: string): number => {
  const input = parseFileToArrayOfStrings(source).map((s) =>
    s.split(":")[1].trim().split(" ")
  ).map((a) => a.filter((b) => b !== "").map((i) => Number(i)));

  const races = input[0].map((_, colIndex) =>
    input.map((row) => row[colIndex])
  );
  let result = 1;

  races.forEach((race) => {
    const raceRecord = race[1];
    const raceResults = calculateRaceResult(race);
    result *= raceResults.filter((r) => r > raceRecord).length;
  });

  return result;
};

export const resultOfPart2 = (source: string): number => {
  const race = parseFileToArrayOfStrings(source).map((s) =>
    s.split(":")[1].trim().replace(/\s/g, "")
  ).map((s) => Number(s));

  let result = 1;

  const raceRecord = race[1];
  const raceResults = calculateRaceResult(race);
  result *= raceResults.filter((r) => r > raceRecord).length;

  return result;
};

const calculateRaceResult = (race: number[]): number[] => {
  const raceResults: number[] = [];
  for (let i = 0; i <= race[0]; i++) {
    const timeForButton = i;
    const speedIncrease = timeForButton * 1;
    const raceTime = race[0] - timeForButton;
    raceResults.push(speedIncrease * raceTime);
  }
  return raceResults;
};
