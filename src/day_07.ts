import { parseFileToArrayOfStrings } from "./support/helper.ts";

enum Type {
  FIVE_OF_A_KIND = 1,
  FOUR_OF_A_KIND = 2,
  FULL_HOUSE = 3,
  THREE_OF_A_KIND = 4,
  TWO_PAIR = 5,
  ONE_PAIR = 6,
  HIGH_CARD = 7,
}

export const resultOfPart1 = (source: string): number => {
  //PREPARE INPUT
  const handsAndBids = parseFileToArrayOfStrings(source).map((h) =>
    h.split(" ")
  );
  const cardLabels: { label: string; rank: number }[] = [
    { label: "A", rank: 1 },
    { label: "K", rank: 2 },
    { label: "Q", rank: 3 },
    { label: "J", rank: 4 },
    { label: "T", rank: 5 },
    { label: "9", rank: 6 },
    { label: "8", rank: 7 },
    { label: "7", rank: 8 },
    { label: "6", rank: 9 },
    { label: "5", rank: 10 },
    { label: "4", rank: 11 },
    { label: "3", rank: 12 },
    { label: "2", rank: 13 },
  ];

  //CALCULATE TYPE
  const ranking: {
    hand: string;
    bid: number;
    type: number;
    ranking: number;
  }[] = [];
  handsAndBids.forEach((handAndBid) => {
    const chars: { char: string; count: number }[] = [];
    handAndBid[0].split("").forEach((handChar) => {
      if (chars.some((char) => char.char === handChar)) {
        chars.filter((char) => char.char === handChar)[0].count += 1;
      } else {
        chars.push({ char: handChar, count: 1 });
      }
    });
    if (chars.some((c) => c.count === 5)) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.FIVE_OF_A_KIND,
        ranking: 0,
      });
    } else if (chars.some((c) => c.count === 4)) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.FOUR_OF_A_KIND,
        ranking: 0,
      });
    } else if (
      chars.some((c) => c.count === 2) && chars.some((c) => c.count === 3)
    ) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.FULL_HOUSE,
        ranking: 0,
      });
    } else if (chars.some((c) => c.count === 3)) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.THREE_OF_A_KIND,
        ranking: 0,
      });
    } else if (chars.filter((c) => c.count === 2).length === 2) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.TWO_PAIR,
        ranking: 0,
      });
    } else if (chars.some((c) => c.count === 2)) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.ONE_PAIR,
        ranking: 0,
      });
    } else if (
      chars.map((c) => c.count).filter((value, index, self) =>
        self.indexOf(value) === index
      ).length
    ) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.HIGH_CARD,
        ranking: 0,
      });
    }
  });

  //SORT (by type DESC, by hand DESC by cardLabels order)
  ranking.sort((a, b) => {
    if (b.type > a.type) {
      return 1;
    } else if (b.type < a.type) {
      return -1;
    } else {
      for (let i = 0; i < a.hand.length; i++) {
        const diff = cardLabels.map((x) => {
          return x.label;
        }).indexOf(a.hand.charAt(i)) - cardLabels.map((x) => {
          return x.label;
        }).indexOf(b.hand.charAt(i));
        if (diff < 0) {
          return 1;
        }
        if (diff > 0) {
          return -1;
        }
      }
    }
    return 0;
  });

  //SET RANKING
  for (let i = 0; i < ranking.length; i++) {
    ranking[i].ranking = i + 1;
  }

  //CALCULATE RESULT
  const result = ranking.map((r) => {
    return r.ranking * r.bid;
  }).reduce((a, b) => {
    return a + b;
  });
  return result;
};

export const resultOfPart2 = (source: string): number => {
  //PREPARE INPUT
  const handsAndBids = parseFileToArrayOfStrings(source).map((h) =>
    h.split(" ")
  );
  const cardLabels: { label: string; rank: number }[] = [
    { label: "A", rank: 1 },
    { label: "K", rank: 2 },
    { label: "Q", rank: 3 },
    { label: "T", rank: 4 },
    { label: "9", rank: 5 },
    { label: "8", rank: 6 },
    { label: "7", rank: 7 },
    { label: "6", rank: 8 },
    { label: "5", rank: 9 },
    { label: "4", rank: 10 },
    { label: "3", rank: 11 },
    { label: "2", rank: 12 },
    { label: "J", rank: 13 },
  ];

  //CALCULATE TYPE
  const ranking: {
    hand: string;
    bid: number;
    type: number;
    ranking: number;
  }[] = [];
  handsAndBids.forEach((handAndBid) => {
    const chars: { char: string; count: number }[] = [];
    const jokerCount = handAndBid[0].split("").filter((c) => c === "J").length;
    handAndBid[0].split("").forEach((handChar) => {
      if (chars.some((char) => char.char === handChar)) {
        chars.filter((char) => char.char === handChar)[0].count += 1;
      } else {
        chars.push({ char: handChar, count: 1 });
      }
    });
    if (chars.some((c) => c.count + jokerCount === 5) || jokerCount === 5) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.FIVE_OF_A_KIND,
        ranking: 0,
      });
    } else if (
      chars.filter((c) => c.char !== "J").some((c) =>
        c.count + jokerCount === 4
      ) || jokerCount === 4
    ) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.FOUR_OF_A_KIND,
        ranking: 0,
      });
    } else if (
      (jokerCount === 0 && chars.some((c) => c.count === 3) &&
        chars.some((c) => c.count === 2)) ||
      (chars.filter((c) => c.count === 2).length === 2 && jokerCount === 1)
    ) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.FULL_HOUSE,
        ranking: 0,
      });
    } else if (
      (chars.filter((c) => c.char !== "J").some((c) =>
        c.count + jokerCount === 3
      ) || jokerCount === 3) &&
      (jokerCount === 0 || (jokerCount === 1 && chars.filter((c) =>
            c.count === 1 && c.char !== "J"
          ).length === 2) ||
        (jokerCount === 2 &&
          chars.filter((c) => c.count === 1 && c.char !== "j").length === 3))
    ) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.THREE_OF_A_KIND,
        ranking: 0,
      });
    } else if ((chars.filter((c) => c.count === 2).length === 2)) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.TWO_PAIR,
        ranking: 0,
      });
    } else if (
      chars.some((c) => c.count + jokerCount === 2)
    ) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.ONE_PAIR,
        ranking: 0,
      });
    } else if (
      chars.length === 5
    ) {
      ranking.push({
        hand: handAndBid[0],
        bid: Number(handAndBid[1]),
        type: Type.HIGH_CARD,
        ranking: 0,
      });
    } else {
      console.log(
        "Oh no this one is skipped, you made a mistake: " + handAndBid[0],
      );
    }
  });

  //SORT (by type DESC, by hand DESC by cardLabels order)
  ranking.sort((a, b) => {
    if (b.type > a.type) {
      return 1;
    } else if (b.type < a.type) {
      return -1;
    } else {
      for (let i = 0; i < a.hand.length; i++) {
        const diff = cardLabels.map((x) => {
          return x.label;
        }).indexOf(a.hand.charAt(i)) - cardLabels.map((x) => {
          return x.label;
        }).indexOf(b.hand.charAt(i));
        if (diff < 0) {
          return 1;
        }
        if (diff > 0) {
          return -1;
        }
      }
    }
    return 0;
  });

  //SET RANKING
  for (let i = 0; i < ranking.length; i++) {
    ranking[i].ranking = i + 1;
  }

  //CALCULATE RESULT
  const result = ranking.map((r) => {
    return r.ranking * r.bid;
  }).reduce((a, b) => {
    return a + b;
  });
  return result;
};
