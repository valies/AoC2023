export const parseFileToArrayOfStrings = (source: string): string[] => {
  return Deno.readTextFileSync(source).split("\n");
};

export const parseFileToArrayOfNumbers = (source: string): number[] => {
  return Deno.readTextFileSync(source).split("\n").map(Number);
};

export const parseStringToArrayOfStrings = (source: string): string[] => {
  return source.toString().split("").map(String);
};

export const prettyPrint = (prefix: string, result: number): string => {
  return prefix + ": " + result;
};
