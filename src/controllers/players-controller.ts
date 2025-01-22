import { Request, Response } from "express";
import * as Service from "../services/players-service";
import { PlayerModel } from '../models/player-model';

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await Service.getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req?.params?.id);
    const httpResponse = await Service.getPlayersByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const postPlayer = async (req: Request, res: Response) => {
    const newPlayer = req?.body;
    const httpResponse = await Service.createPlayerService(newPlayer);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req?.params?.id);
    const httpResponse = await Service.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req?.params?.id);
    const newDataPlayer : Partial<PlayerModel> = req?.body;
    const httpResponse = await Service.updatePlayerService(id, newDataPlayer);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}
