import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

// exporta a funcao assincrona para criar categoria
export async function createEndereco(req: Request, res: Response) {
	try {
		//res.send('Ok post category');
		const {nome, numero, bairro, cidade, complemento} = req.body;
		const endereco = await Endereco.create({nome, numero, bairro, cidade, complemento});
		res.status(201).json(endereco);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}