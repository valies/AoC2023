import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { resultOfPart1 } from "../src/day_12.ts";

Deno.test("Day 12 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_12_input_example.txt"),
    21,
  );
});

Deno.test("Day 12 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_12_input.txt"),
    7260,
  );
});
