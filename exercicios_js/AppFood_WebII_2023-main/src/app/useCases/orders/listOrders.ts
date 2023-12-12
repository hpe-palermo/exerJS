import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// exporta a funcao assincrona para listar os pedidos
export async function listOrders(req: Request, res: Response) {
	try {
		const orders = await Order.find()
			.sort({creatAt: 1})
			.populate('products.product');

		res.json(orders);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}

}