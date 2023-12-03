import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_02.ts";

Deno.test("Day 02 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_02_input_example.txt"),
    8,
  );
});

Deno.test("Day 02 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_02_input.txt"),
    2727,
  );
});

Deno.test("Day 02 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_02_input_example.txt"),
    2286,
  );
});

Deno.test("Day 02 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_02_input.txt"),
    56580,
  );
});
