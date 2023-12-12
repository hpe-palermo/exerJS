import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

// exporta a funcao assincrona para listar as categorias
export async function listEnderecos(req: Request, res: Response) {
	try {
		const enderecos = await Endereco.find();

		res.json(enderecos);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}