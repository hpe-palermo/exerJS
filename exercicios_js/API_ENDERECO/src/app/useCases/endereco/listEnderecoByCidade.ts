import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';


// exporta a funcao assincrona para listar as categorias
export async function listEnderecoByCidade(req: Request, res: Response) {
	try {
		const {cidadeId} = req.params;
		const cidades = await Endereco.find().where('cidade').equals(cidadeId);

		res.json(cidades);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}