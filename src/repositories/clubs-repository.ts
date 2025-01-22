import { ClubModel } from "../models/clubs-model";
import dataClubs from "../data/clubs.json";

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return dataClubs
}