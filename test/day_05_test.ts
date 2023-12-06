import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_05.ts";

Deno.test("Day 05 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_05_input_example.txt"),
    35,
  );
});

Deno.test("Day 05 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_05_input.txt"),
    51752125,
  );
});

Deno.test("Day 05 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_05_input_example.txt"),
    46,
  );
});

//takes about 8 mins -_- and result is wrong :'(
Deno.test("Day 05 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_05_input.txt"),
    208902075, //too high
  );
});
