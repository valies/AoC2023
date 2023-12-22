import { parseFileToArrayOfStrings } from "./support/helper.ts";

//SPOILER at bottom of the page

interface Map {
  node: string;
  L: string;
  R: string;
}

interface Distance {
  starterNode: string;
  distance: number;
}

export const resultOfPart1 = (source: string): number => {
  const input = parseFileToArrayOfStrings(source);
  const directions = input.slice(0, input.indexOf(""))[0].split("");
  const maps = input.slice(input.indexOf("") + 1).map((m) => {
    m = m.replace(/\W/g, "");
    return {
      node: m.substring(0, 3),
      L: m.substring(3, 6),
      R: m.substring(6, 9),
    };
  });
  const currentMap = maps.filter((m) => m.node.endsWith("A"))[0];
  const result = distance(currentMap, maps, directions);
  return result.distance;
};

export const resultOfPart2 = (source: string): number => {
  const input = parseFileToArrayOfStrings(source);
  const directions = input.slice(0, input.indexOf(""))[0].split("");
  const maps = input.slice(input.indexOf("") + 1).map((m) => {
    m = m.replace(/\W/g, "");
    return {
      node: m.substring(0, 3),
      L: m.substring(3, 6),
      R: m.substring(6, 9),
    };
  });
  let result = 0;
  const starters = maps.filter((m) => m.node.endsWith("A"));
  const distances: Distance[] = [];
  starters.forEach((starter) => {
    distances.push(distance(starter, maps, directions));
  });
  result = lcm(distances.map((d) => Number(d.distance)));
  return result;
};

const distance = (
  starter: Map,
  maps: Map[],
  directions: string[],
): Distance => {
  let thisResult = 0;
  let currentMap = starter;
  while (!currentMap.node.endsWith("Z")) {
    for (const direction of directions) {
      if (direction === "L") {
        currentMap = maps.filter((m) => m.node === currentMap.L)[0];
      } else {
        currentMap = maps.filter((m) => m.node === currentMap.R)[0];
      }
      thisResult += 1;
      if (currentMap.node.endsWith("Z")) {
        break;
      }
    }
  }
  const distance: Distance = {
    starterNode: starter.node,
    distance: thisResult,
  };
  return distance;
};

const lcm = (distances: number[]): number => {
  let lcm = distances[0];
  for (let i = 1; i < distances.length; i++) {
    lcm = (distances[i] * lcm) /
      (gcd(distances[i], lcm));
  }
  return lcm;
};

const gcd = (a: number, b: number): number => {
  if (b == 0) return a;
  return gcd(b, a % b);
};

/* SPOILER
 |
 |
 |
 |
 |
 |
\ /
 `
Algorithm: Least Common Multiple*/
