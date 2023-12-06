import { parseFileToArrayOfStrings } from "./support/helper.ts";

interface Mapping {
  destination: number;
  source: number;
  range: number;
}

export const resultOfPart1 = (source: string): number => {
  const almanac = parseFileToArrayOfStrings(source);

  //PREPARE INPUT
  const seedCollection: number[] = almanac[0].split(":")[1].trim().split(" ")
    .map(
      (s) => {
        return Number(s.trim());
      },
    );

  return smallestLocation(almanac, seedCollection);
};

export const resultOfPart2 = (source: string): number => {
  const almanac = parseFileToArrayOfStrings(source);

  //PREPARE INPUT
  const input: number[] = almanac[0].split(":")[1].trim().split(" ")
    .map(
      (s) => {
        return Number(s.trim());
      },
    );

  //CALCULATE
  let result: number = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < input.length; i += 2) {
    const chunk = input.slice(i, i + 2);
    let seedCollection: number[] = [];
    for (let j = 0; j < chunk[1]; j++) {
      seedCollection.push(chunk[0] + j);
      const numberOfSeedForCalculationLimit = 1000;
      if (
        seedCollection.length > numberOfSeedForCalculationLimit ||
        (chunk[1] % numberOfSeedForCalculationLimit === chunk[1] &&
          seedCollection.length === chunk[1])
      ) {
        const currentSmallestLocation = smallestLocation(
          almanac,
          seedCollection,
        );
        result = Math.min(result, currentSmallestLocation);
        console.log("Result: " + result);
        seedCollection = [];
      }
    }
  }

  return result;
};

const createMap = (elements: string[]): Mapping[] => {
  const map: Mapping[] = [];
  elements.forEach((element) => {
    const elements: string[] = element.split(" ");
    map.push({
      destination: Number(elements[0]),
      source: Number(elements[1]),
      range: Number(elements[2]),
    });
  });
  return map.sort((a, b) => a.destination - b.destination);
};

const calculateSource = (map: Mapping[], oldSource: number): number => {
  let mapToUse = { destination: 0, source: 0, range: 0 };
  let isDone = false;
  map.forEach((element) => {
    if (
      !isDone && element.source <= oldSource &&
      oldSource <= element.source + element.range
    ) {
      mapToUse = element;
      isDone = true;
    }
  });
  const gap = oldSource - mapToUse.source;
  const source = mapToUse.destination + gap;
  return source;
};

const smallestLocation = (
  almanac: string[],
  seedCollection: number[],
): number => {
  //PREPARE MAPPING
  const seedToSoilArray = almanac.splice(
    almanac.findIndex((i) => i === "seed-to-soil map:") + 1,
    almanac.findIndex((i) => i === "soil-to-fertilizer map:") - 4,
  );
  const seedToSoilMap = createMap(seedToSoilArray);

  const soilToFertilizerArray = almanac.splice(
    almanac.findIndex((i) => i === "soil-to-fertilizer map:") + 1,
    almanac.findIndex((i) => i === "fertilizer-to-water map:") - 6,
  );
  const soilToFertilizerMap = createMap(soilToFertilizerArray);

  const fertilizerToWaterArray = almanac.splice(
    almanac.findIndex((i) => i === "fertilizer-to-water map:") + 1,
    almanac.findIndex((i) => i === "water-to-light map:") - 8,
  );
  const fertilizerToWaterMap = createMap(fertilizerToWaterArray);

  const waterToLightArray = almanac.splice(
    almanac.findIndex((i) => i === "water-to-light map:") + 1,
    almanac.findIndex((i) => i === "light-to-temperature map:") - 10,
  );
  const waterToLightMap = createMap(waterToLightArray);

  const lightToTemperatureArray = almanac.splice(
    almanac.findIndex((i) => i === "light-to-temperature map:") + 1,
    almanac.findIndex((i) => i === "temperature-to-humidity map:") - 12,
  );
  const lightToTemperatureMap = createMap(lightToTemperatureArray);

  const temperatureToHumidityArray = almanac.splice(
    almanac.findIndex((i) => i === "temperature-to-humidity map:") + 1,
    almanac.findIndex((i) => i === "humidity-to-location map:") - 14,
  );
  const temperatureToHumidityMap = createMap(temperatureToHumidityArray);

  const humidityToLocationArray = almanac.splice(
    almanac.findIndex((i) => i === "humidity-to-location map:") + 1,
    almanac.length - 1,
  );
  const humidityToLocationMap = createMap(humidityToLocationArray);

  //START CALCULATION
  let result = Number.MAX_SAFE_INTEGER;
  seedCollection.forEach((seed) => {
    let source = seed;
    source = calculateSource(seedToSoilMap, source);
    source = calculateSource(soilToFertilizerMap, source);
    source = calculateSource(fertilizerToWaterMap, source);
    source = calculateSource(waterToLightMap, source);
    source = calculateSource(lightToTemperatureMap, source);
    source = calculateSource(temperatureToHumidityMap, source);
    source = calculateSource(humidityToLocationMap, source);
    if (result > source) {
      result = source;
    }
  });
  return result;
};
