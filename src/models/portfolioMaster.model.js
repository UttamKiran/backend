import { Schema, model } from 'mongoose';

const portfolioMasterSchema = new Schema({
	_id: { type: Number, required: true },
	name: { type: String, required: true },
	crtdOn: { type: Date, required: true },
	crtdTZ: { type: String, required: true },
	crtdBy: { type: String, required: true },
	crtdRef: { type: Schema.Types.ObjectId }
});

export default model('portfolio_masters', portfolioMasterSchema, 'portfolioMaster');
