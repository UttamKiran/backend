import { Schema, model } from 'mongoose';

const commonMasterSchema = new Schema({
	_id: { type: Number, required: true },
	typeRef: { type: Number, required: true },
	val: { type: String, required: true },
	isDesp: { type: Boolean, required: true },
	desc: { type: String, required: true },
	order: { type: Number, required: true },
	crtdOn: { type: Date, required: true },
	crtdTZ: { type: String, required: true },
	crtdBy: { type: String, required: true },
	crtdRef: { type: Schema.Types.ObjectId }
});
export default model('common_master', commonMasterSchema, 'commonMaster');
