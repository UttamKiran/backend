import { Schema, model } from 'mongoose';

const MarketMasterSchema = new Schema({
	_id: { type: Number, required: true },
	name: { type: String, required: true },
	crtdOn: { type: Date, required: true },
	crtdTZ: { type: String, required: true },
	crtdBy: { type: String, required: true },
	crtdRef: { type: Schema.Types.ObjectId }
});

export default model('market_masters', MarketMasterSchema, 'marketMaster');
