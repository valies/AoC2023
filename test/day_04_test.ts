import { assertEquals } from "https://deno.land/std@0.207.0/assert/mod.ts";
import {
  resultOfPart1,
  resultOfPart1Reworked,
  resultOfPart2,
} from "../src/day_04.ts";

Deno.test("Day 04 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_04_input_example.txt"),
    13,
  );
});

Deno.test("Day 04 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_04_input.txt"),
    22897,
  );
});

Deno.test("Day 04 part 1 example - reworked", () => {
  assertEquals(
    resultOfPart1Reworked("./test/data/day_04_input_example.txt"),
    13,
  );
});

Deno.test("Day 04 part 1 actual - reworked", () => {
  assertEquals(
    resultOfPart1Reworked("./test/data/day_04_input.txt"),
    22897,
  );
});

Deno.test("Day 04 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_04_input_example.txt"),
    30,
  );
});

Deno.test("Day 04 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_04_input.txt"),
    5095824,
  );
});
