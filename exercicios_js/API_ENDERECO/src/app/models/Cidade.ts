// importa model, Schema e exporta o model Product
import {model, Schema } from 'mongoose';

export const Cidade = model('Cidade', new Schema({
	nome: {
		type: String,
		required: true,
	},
	estado: {
		type: String,
		required: true,
	}
}));