import { HttpResponse } from './../models/http-response-model';
import { Request, Response } from "express";
import * as Service from "../services/players-service";

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