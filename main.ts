import { prettyPrint } from "./src/support/helper.ts";
import { resultOfPart1 as resultOfPart1FromDay1 } from "./src/day_01.ts";
import { resultOfPart2 as resultOfPart2FromDay1 } from "./src/day_01.ts";
import { resultOfPart1 as resultOfPart1FromDay2 } from "./src/day_02.ts";
import { resultOfPart2 as resultOfPart2FromDay2 } from "./src/day_02.ts";
import { resultOfPart1 as resultOfPart1FromDay3 } from "./src/day_03.ts";
import { resultOfPart2 as resultOfPart2FromDay3 } from "./src/day_03.ts";
import { resultOfPart1 as resultOfPart1FromDay4 } from "./src/day_04.ts";
import { resultOfPart2 as resultOfPart2FromDay4 } from "./src/day_04.ts";

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

console.log(
  prettyPrint(
    "Day 02 part 1",
    resultOfPart1FromDay2("./test/data/day_02_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 02 part 2",
    resultOfPart2FromDay2("./test/data/day_02_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 03 part 1",
    resultOfPart1FromDay3("./test/data/day_03_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 03 part 2",
    resultOfPart2FromDay3("./test/data/day_03_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 04 part 1",
    resultOfPart1FromDay4("./test/data/day_04_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 04 part 2",
    resultOfPart2FromDay4("./test/data/day_04_input_example.txt"),
  ),
);
