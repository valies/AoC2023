import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_06.ts";

Deno.test("Day 06 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_06_input_example.txt"),
    288,
  );
});

Deno.test("Day 06 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_06_input.txt"),
    1731600,
  );
});

Deno.test("Day 06 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_06_input_example.txt"),
    71503,
  );
});

Deno.test("Day 06 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_06_input.txt"),
    40087680,
  );
});
