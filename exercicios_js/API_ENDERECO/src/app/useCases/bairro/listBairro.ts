import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';


// exporta a funcao assincrona para listar os produtos
export async function listBairro(req: Request, res: Response) {
	try {
		const products = await Bairro.find();

		res.json(products);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}