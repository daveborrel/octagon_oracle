import FighterService from "./fighterService";
import { Request, Response } from "express";

export default class FighterController {
  private fighterService: FighterService;

  constructor() {
    this.fighterService = new FighterService();
  }

  createFighter = (req: Request, res: Response): void => {
    try {
      const { firstName, lastName } = req.body;

      if (!firstName || !lastName) {
        res.status(400).json({ message: "First and last name required." });
        return;
      }

      const newFighter = this.fighterService.createFighter(firstName, lastName);

      res.status(201).json(newFighter);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not create fighter.", error });
    }
  };

  getFighters = (req: Request, res: Response): void => {
    try {
      if (req.method == "GET") {
        const fighters = this.fighterService.getAllFighters();
        res.status(200).json(fighters);
      }
    } catch (error) {
      res.status(500).json({ message: "Could not retrieve fighters.", error });
    }
  };
}
