import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    return responseContent(data)
}

export const getPlayersByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    return responseContent(data)
}

export const createPlayerService = async (player: PlayerModel) => {
    if (Object.keys(player).length === 0) return HttpResponse.badRequest("Dados inválidos. Verifique os campos enviados.")
    const data = await PlayerRepository.insertPlayer(player);
    return responseContent(data)
}

const responseContent = async (data: any) => {
    if (!data){
        return await HttpResponse.noContent();
    }

    return HttpResponse.ok(data) || null;

}