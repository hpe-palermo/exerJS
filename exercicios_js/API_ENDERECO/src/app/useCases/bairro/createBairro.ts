import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

// exporta a funcao assincrona para criar o pedido
export async function createBairro(req: Request, res: Response) {
	try {
		const {nome} = req.body;

		const order = await Bairro.create({ nome });
		res.status(201).json(order);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}