import { FighterExistsError } from "./fighterErrors";
import FighterRepository from "./fighterRepository";

/**
 * Errors will only be re-thrown from the repository layer.
 * TODO // Need to see what the best way error handling is done in this layer of the application.
 */

export default class FighterService {
  private repository: FighterRepository;

  constructor() {
    this.repository = new FighterRepository();
  }

  async createFighter(firstName: string, lastName: string): Promise<any> {
    try {
      const fighter = await this.repository.getFighterByName(
        firstName,
        lastName
      );
      if (fighter) {
        throw new FighterExistsError("Fighter already exists");
      }
      return await this.repository.createFighter(firstName, lastName);
    } catch (error) {
      throw error;
    }
  }

  async getAllFighters(): Promise<any> {
    try {
      return await this.repository.getAllFighters();
    } catch (error) {
      throw error;
    }
  }

  async getFighterByQuery(query): Promise<any> {
    try {
      return await this.repository.deleteFighterByQuery(query);
    } catch (error) {
      throw error;
    }
  }

  async deleteFighterByQuery(query): Promise<any> {
    try {
      if (query) {
        return await this.repository.deleteFighterByQuery(query);
      }
    } catch (error) {
      throw error;
    }
  }
}
