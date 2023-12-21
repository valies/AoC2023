import { parseFileToArrayOfStrings } from "./support/helper.ts";

export const resultOfPart1 = (source: string): number => {
  const universe = parseFileToArrayOfStrings(source).map((s) => {
    return s.split("").map((n) => n);
  });
  const rows = expandingRowStartIndexes(universe);
  const columns = expandingColumnStartIndexes(universe);
  const coordinates = drawCoordinates(universe);
  const shortestPathPerPair = drawShortestPathPerPair(
    coordinates,
    rows,
    columns,
    1,
  );
  let result = 0;
  shortestPathPerPair.forEach((p) => result += p.shortestPath);
  return result;
};

export const resultOfPart2 = (source: string, expansion: number): number => {
  const universe = parseFileToArrayOfStrings(source).map((s) => {
    return s.split("").map((n) => n);
  });
  const rows = expandingRowStartIndexes(universe);
  const columns = expandingColumnStartIndexes(universe);
  const coordinates = drawCoordinates(universe);
  const shortestPathPerPair = drawShortestPathPerPair(
    coordinates,
    rows,
    columns,
    expansion,
  );
  let result = 0;
  shortestPathPerPair.forEach((p) => result += p.shortestPath);
  return result;
};

const expandingRowStartIndexes = (universe: string[][]): number[] => {
  const rows: number[] = [];
  for (let i = 0; i < universe.length; i++) {
    if (!universe[i].some((u) => u === "#")) {
      rows.push(i);
    }
  }
  return rows;
};

const expandingColumnStartIndexes = (universe: string[][]): number[] => {
  const columns: number[] = [];
  for (let j = 0; j < universe[0].length; j++) {
    const verticalLine = universe.map((u) => u[j]);
    if (!verticalLine.some((l) => l === "#")) {
      columns.push(j);
    }
  }
  return columns;
};

const drawCoordinates = (
  universe: string[][],
): { galaxy: number; coordinate: { i: number; j: number } }[] => {
  let counter = 0;
  const coordinates: {
    galaxy: number;
    coordinate: { i: number; j: number };
  }[] = [];
  for (let i = 0; i < universe.length; i++) {
    for (let j = 0; j < universe[i].length; j++) {
      if (universe[i][j] === "#") {
        counter++;
        coordinates.push({ galaxy: counter, coordinate: { i: i, j: j } });
      }
    }
  }
  return coordinates;
};

const drawShortestPathPerPair = (
  coordinates: { galaxy: number; coordinate: { i: number; j: number } }[],
  rows: number[],
  columns: number[],
  expansion: number,
): {
  galaxy: number;
  galaxy2: number;
  shortestPath: number;
}[] => {
  const shortestPathPerPair: {
    galaxy: number;
    galaxy2: number;
    shortestPath: number;
  }[] = [];
  for (let i = 0; i < coordinates.length; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      const one = coordinates[i];
      const two = coordinates[j];
      let rowExpansionCount = 0;
      for (const row of rows) {
        if (row > one.coordinate.i && row <= two.coordinate.i) {
          rowExpansionCount++;
        }
      }
      let columnExpansionCount = 0;
      for (const column of columns) {
        if (
          one.coordinate.j < two.coordinate.j && column > one.coordinate.j &&
          column <= two.coordinate.j
        ) {
          columnExpansionCount++;
        }
        if (
          one.coordinate.j >= two.coordinate.j && column < one.coordinate.j &&
          column >= two.coordinate.j
        ) {
          columnExpansionCount++;
        }
      }
      const path = Math.max(one.coordinate.i, two.coordinate.i) +
        (expansion * rowExpansionCount) -
        Math.min(one.coordinate.i, two.coordinate.i) +
        Math.max(one.coordinate.j, two.coordinate.j) +
        (expansion * columnExpansionCount) -
        Math.min(one.coordinate.j, two.coordinate.j);
      shortestPathPerPair.push({
        galaxy: one.galaxy,
        galaxy2: two.galaxy,
        shortestPath: path,
      });
    }
  }
  return shortestPathPerPair;
};
