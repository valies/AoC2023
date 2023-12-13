import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_07.ts";

Deno.test("Day 07 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_07_input_example.txt"),
    6440,
  );
});

Deno.test("Day 07 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_07_input.txt"),
    245794640,
  );
});

Deno.test("Day 07 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_07_input_example.txt"),
    5905,
  );
});

Deno.test("Day 07 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_07_input.txt"),
    247899149,
  );
});
