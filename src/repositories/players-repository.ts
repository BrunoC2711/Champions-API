import { PlayerModel } from "../models/player-model";
import dataPlayers from "../data/players.json"

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataPlayers;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataPlayers.find( player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel): Promise< | undefined> => {
    dataPlayers.push(player);
}