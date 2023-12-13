import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_08.ts";

Deno.test("Day 08 part 1 example 1", () => {
  assertEquals(
    resultOfPart1("./test/data/day_08_part_01_input_example1.txt"),
    2,
  );
});

Deno.test("Day 08 part 1 example 2", () => {
  assertEquals(
    resultOfPart1("./test/data/day_08_part_01_input_example2.txt"),
    6,
  );
});

Deno.test("Day 08 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_08_input.txt"),
    17621,
  );
});

Deno.test("Day 08 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_08_part_02_input_example.txt"),
    6,
  );
});

Deno.test("Day 08 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_08_input.txt"),
    20685524831999,
  );
});
