import { prettyPrint } from "./src/support/helper.ts";
import { resultOfPart1 as resultOfPart1FromDay1 } from "./src/day_01.ts";
import { resultOfPart2 as resultOfPart2FromDay1 } from "./src/day_01.ts";
import { resultOfPart1 as resultOfPart1FromDay2 } from "./src/day_02.ts";
import { resultOfPart2 as resultOfPart2FromDay2 } from "./src/day_02.ts";
import { resultOfPart1 as resultOfPart1FromDay3 } from "./src/day_03.ts";
import { resultOfPart2 as resultOfPart2FromDay3 } from "./src/day_03.ts";
import { resultOfPart1 as resultOfPart1FromDay4 } from "./src/day_04.ts";
import { resultOfPart2 as resultOfPart2FromDay4 } from "./src/day_04.ts";
import { resultOfPart1 as resultOfPart1FromDay5 } from "./src/day_05.ts";
import { resultOfPart1 as resultOfPart1FromDay6 } from "./src/day_06.ts";
import { resultOfPart2 as resultOfPart2FromDay6 } from "./src/day_06.ts";
import { resultOfPart1 as resultOfPart1FromDay7 } from "./src/day_07.ts";
import { resultOfPart2 as resultOfPart2FromDay7 } from "./src/day_07.ts";
import { resultOfPart1 as resultOfPart1FromDay8 } from "./src/day_08.ts";
import { resultOfPart2 as resultOfPart2FromDay8 } from "./src/day_08.ts";
import { resultOfPart1 as resultOfPart1FromDay9 } from "./src/day_09.ts";
import { resultOfPart2 as resultOfPart2FromDay9 } from "./src/day_09.ts";
import { resultOfPart1 as resultOfPart1FromDay11 } from "./src/day_11.ts";
import { resultOfPart2 as resultOfPart2FromDay11 } from "./src/day_11.ts";
import { resultOfPart1 as resultOfPart1FromDay12 } from "./src/day_12.ts";

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
    resultOfPart2FromDay4("./test/data/day_04_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 05 part 1",
    resultOfPart1FromDay5("./test/data/day_05_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 06 part 1",
    resultOfPart1FromDay6("./test/data/day_06_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 06 part 2",
    resultOfPart2FromDay6("./test/data/day_06_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 07 part 1",
    resultOfPart1FromDay7("./test/data/day_07_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 07 part 2",
    resultOfPart2FromDay7("./test/data/day_07_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 08 part 1",
    resultOfPart1FromDay8("./test/data/day_08_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 08 part 2",
    resultOfPart2FromDay8("./test/data/day_08_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 09 part 1",
    resultOfPart1FromDay9("./test/data/day_09_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 09 part 2",
    resultOfPart2FromDay9("./test/data/day_09_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 11 part 1",
    resultOfPart1FromDay11("./test/data/day_11_input.txt"),
  ),
);

console.log(
  prettyPrint(
    "Day 11 part 2",
    resultOfPart2FromDay11("./test/data/day_11_input.txt", 1000000 - 1),
  ),
);

console.log(
  prettyPrint(
    "Day 12 part 1",
    resultOfPart1FromDay12("./test/data/day_12_input_example.txt"),
  ),
);
