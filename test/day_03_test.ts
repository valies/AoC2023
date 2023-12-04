import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_03.ts";

Deno.test("Day 03 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_03_input_example.txt"),
    4361,
  );
});

Deno.test("Day 03 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_03_input.txt"),
    507214,
  );
});

Deno.test("Day 03 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_03_input_example.txt"),
    467835,
  );
});

Deno.test("Day 03 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_03_input.txt"),
    72553319,
  );
});
