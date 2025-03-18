// userRepository.ts
import { collections } from "../../config/database/database";
import Fighter from "./fighterModel";

/**
 * This handles retrieving from the database.
 */

export default class FighterRepository {
  async createFighter(firstName: string, lastName: string): Promise<any> {
    const newFighter = new Fighter(firstName, lastName);
    try {
      await collections.fighters.insertOne(newFighter);
      return newFighter;
    } catch (error) {
      console.error("Unable to create fighter", error);
      throw error;
    }
  }

  async getAllFighters(): Promise<any> {
    try {
      const fighters = await collections.fighters
        .find({}, { limit: 10 })
        .toArray();
      return fighters;
    } catch (error) {
      console.error("Unable to get list of fighters", error);
      throw error;
    }
  }

  async getFighterByQuery(query): Promise<any> {
    try {
      const fighter = await collections.fighters.findOne(query);
      return fighter;
    } catch (error) {
      console.error("Unable to get specific fighter", error);
      throw error;
    }
  }

  async getFighterByName(firstName: string, lastName: string): Promise<any> {
    try {
      const fighter = await collections.fighters.findOne({
        firstNamme: firstName,
        lastName: lastName,
      });
      return fighter;
    } catch (error) {
      console.error("Unable to get specific fighter", error);
      throw error;
    }
  }

  async deleteFighterByQuery(query): Promise<any> {
    try {
      const fighter = await collections.fighters.deleteOne(query);
      return fighter;
    } catch (error) {
      console.error("Unable to delete the fighter", error);
      throw error;
    }
  }
}
