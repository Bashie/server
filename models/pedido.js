import mongoose from 'mongoose';
const pedidoSchema = new mongoose.Schema({
	"cliente": [
		{ type: mongoose.Schema.Types.ObjectId, ref: 'cliente' }
	],
	"items": String
}, { timestamps: true });
const Pedido = mongoose.model('pedido', pedidoSchema);
export default Pedido;