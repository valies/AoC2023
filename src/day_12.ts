import { parseFileToArrayOfStrings } from "./support/helper.ts";
import { memoizy } from "https://deno.land/x/memoizy@1.0.0/mod.ts";

//SPOILER at bottom of the page

let lineCombinations: string[];

export const resultOfPart1 = (source: string): number => {
  lineCombinations = [];

  const input = parseFileToArrayOfStrings(source).map(
    (s): { charSequence: string; numbers: number[]; format: string } => {
      return {
        charSequence: s.split(" ")[0],
        numbers: s.split(" ")[1].split(",").map((n) => Number(n)),
        format: "",
      };
    },
  );

  let result = 0;

  input.forEach((line) => {
    let format = "";
    line.numbers.forEach((counter) => {
      for (let i = 0; i < counter; i++) {
        format = format.concat("#");
      }
      format = format.concat(".");
    });
    line.format = format;
    const regexBuilder = "^\\.+".concat(line.format.replaceAll(".", "\\.+"))
      .concat("(?!#)*$");
    const regex = new RegExp(regexBuilder, "i");
    lineCombinations = [];
    const memorizedCombinations = memoizy(combinations);
    memorizedCombinations(line.charSequence);
    lineCombinations.forEach((combination) => {
      if (regex.test(combination)) {
        result++;
      }
    });
  });

  return result;
};

const combinations = (input: string) => {
  if (input.includes("?")) {
    const s1 = input.replace("?", ".");
    const s2 = input.replace("?", "#");
    combinations(s1);
    combinations(s2);
  } else {
    lineCombinations.push("." + input + ".");
  }
};

/* SPOILER
 |
 |
 |
 |
 |
 |
\ /
 `
Dynamic Programming*/
