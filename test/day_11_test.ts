import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { resultOfPart1, resultOfPart2 } from "../src/day_11.ts";

Deno.test("Day 11 part 1 example", () => {
  assertEquals(
    resultOfPart1("./test/data/day_11_input_example.txt"),
    374,
  );
});

Deno.test("Day 11 part 1 actual", () => {
  assertEquals(
    resultOfPart1("./test/data/day_11_input.txt"),
    9647174,
  );
});

Deno.test("Day 11 part 2 example", () => {
  assertEquals(
    resultOfPart2("./test/data/day_11_input_example.txt", 10 - 1),
    1030,
  );
});

Deno.test("Day 11 part 2 example 2", () => {
  assertEquals(
    resultOfPart2("./test/data/day_11_input_example.txt", 100 - 1),
    8410,
  );
});

Deno.test("Day 11 part 2 actual", () => {
  assertEquals(
    resultOfPart2("./test/data/day_11_input.txt", 1000000 - 1),
    377318892554,
  );
});
