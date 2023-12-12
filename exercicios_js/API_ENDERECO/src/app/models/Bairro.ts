// importa model, Schema e exporta o model Order
import {model, Schema } from 'mongoose';

export const Bairro = model('Bairro', new Schema({
	nome: {
		type: String,
		required: true,
	},
}));