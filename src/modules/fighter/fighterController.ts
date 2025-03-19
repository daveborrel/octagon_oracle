import { FighterExistsError } from "./fighterErrors";
import FighterService from "./fighterService";
import { Request, Response } from "express";

export default class FighterController {
  private fighterService: FighterService;

  constructor() {
    this.fighterService = new FighterService();
  }

  createFighter = async (req: Request, res: Response): Promise<any> => {
    try {
      if (req.method == "POST") {
        const { firstName, lastName } = req.body;

        if (!firstName || !lastName) {
          res.status(400).json({
            message: "Cannot create fighter. First and last name required.",
          });
          return;
        }

        const newFighter = await this.fighterService.createFighter(
          firstName,
          lastName
        );

        res.status(201).json(newFighter);
      }
    } catch (error) {
      if (error instanceof FighterExistsError) {
        res.status(409).json({ error: error.message });
      } else {
        res.status(500).json({ message: "Could not create fighter.", error });
      }
    }
  };

  getListOfFighters = async (req: Request, res: Response): Promise<any> => {
    try {
      if (req.method == "GET" && req.query.length) {
        const fighters = await this.fighterService.getFighterByQuery(req.query);
        res.status(200).json(fighters);
      } else {
        const allFighters = await this.fighterService.getAllFighters();
        res.status(200).json(allFighters);
      }
    } catch (error) {
      res.status(500).json({ message: "Could not retrieve fighters.", error });
    }
  };

  deleteFighters = async (req: Request, res: Response): Promise<any> => {
    try {
      if (req.method == "DELETE") {
        const fighters = await this.fighterService.deleteFighterByQuery(
          req.query
        );
        res.status(200).json(fighters);
      }
    } catch (error) {
      res.status(500).json({ message: "Could not delete fighters.", error });
    }
  };
}
