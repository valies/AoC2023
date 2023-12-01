import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_01.ts";

Deno.test("Day 01 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_01_part_01_input_example.txt"),
    142,
  );
});

Deno.test("Day 01 part 1 actual", () => {
  assertEquals(resultOfPart1("./test/data/day_01_input.txt"), 55002);
});

Deno.test("Day 01 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_01_part_02_input_example.txt"),
    281,
  );
});

Deno.test("Day 01 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_01_input.txt"),
    55093,
  );
});
