import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_09.ts";

Deno.test("Day 09 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_09_input_example.txt"),
    114,
  );
});

Deno.test("Day 09 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_09_input.txt"),
    1955513104,
  );
});

Deno.test("Day 09 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_09_input_example.txt"),
    2,
  );
});

Deno.test("Day 09 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_09_input.txt"),
    1131,
  );
});
