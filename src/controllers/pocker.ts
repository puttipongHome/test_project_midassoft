import { Request, Response } from "express";

const pocker = {
  sum: async (req: Request, res: Response) => {
    const hand = req.body.text;
    const cards = hand.split(" ");
    const score = { S: 0, C: 0, H: 0, D: 0 };
    let Total = 0;
    const inHand: string[] = [];
    const evenA = (element: string) => element === "A";
    const evenEight = (element: string) => element === "8";
    const evenJ = (element: string) => element === "J";

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const rank = card.slice(1);
      inHand.push(rank);
      const suit = card[0];

      if (!isNaN(Number(rank))) {
        Total = Total + parseInt(rank) + score[suit];
      } else if (rank === "A") {
        Total = Total + 11;
      } else if (rank === "J" || rank === "Q" || rank === "K") {
        Total = Total + 10;
      }
    }
    if (inHand.every(evenA)) {
      Total = 35;
    } else if (inHand.every(evenEight)) {
      Total = 32.5;
    } else if (inHand.every(evenJ)) {
      Total = 32.5;
    }

    const results = Total;
    return res.status(200).json({ results });
  },
};

const clock = {
  onepatient: async (req: Request, res: Response) => {
    const body = req.body.text;
    const time = body;
    const [hours, minutes] = time.split(":").map(Number);
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = (minutes / 60) * 360;
    let angle = Math.abs(hourAngle - minuteAngle);
    if (angle > 180) {
      angle = 360 - angle;
    }
    const results = angle;
    return res.status(200).json({ results });
  },
};

const substring = {
  sub: async (req: Request, res: Response) => {
    const body = req.body.text;
    const subString = req.body.subString;
    const commonText = subString;
    const data = body.map((word) => word.replace(commonText, ""));
    const results = data;
    return res.status(200).json({ results });
  },
};

const controllerPocker = {
  pocker,
  clock,
  substring,
};

export default controllerPocker;
