import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

// exporta a funcao assincrona para listar os produtos
export async function listCidades(req: Request, res: Response) {
	try {
		const products = await Cidade.find();

		res.json(products);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}