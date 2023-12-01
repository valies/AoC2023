import { prettyPrint } from "./src/support/helper.ts";
import { resultOfPart1 as resultOfPart1FromDay1 } from "./src/day_01.ts";
import { resultOfPart2 as resultOfPart2FromDay1 } from "./src/day_01.ts";

console.log(`
               __
              / _)  roar
     _.----._/ /
    /         /
 __/ (  | (  |
/__.-'|_|--|_|

`);

console.log(
  prettyPrint(
    "Day 01 part 1",
    resultOfPart1FromDay1("./test/data/day_01_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 01 part 2",
    resultOfPart2FromDay1("./test/data/day_01_input.txt"),
  ),
);
