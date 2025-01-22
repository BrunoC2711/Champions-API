import { PlayerModel } from "../models/player-model";
import dataPlayers from "../data/players.json"

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataPlayers;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataPlayers.find( player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    dataPlayers.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = dataPlayers.findIndex(player => player.id === id);
    if (index === -1){
        return null
    }
    dataPlayers.splice(index, 1);
}

export const findAndModifyPlayer = async (id: number, newDataPlayer: Partial<PlayerModel>) => {
    const index = dataPlayers.findIndex(player => player.id === id);
    if (index === -1){
        return null
    }

    dataPlayers[index] = {
        ...dataPlayers[index],
        ...newDataPlayer
    };
}