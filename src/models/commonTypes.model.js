import { Schema, model } from 'mongoose';

const commonTypesSchema = new Schema({
	_id: { type: Number, required: true },
	val: { type: String, required: true },
	desc: { type: String, required: true },
	crtdOn: { type: Date, required: true },
	crtdTZ: { type: String, required: true },
	crtdBy: { type: String, required: true },
	crtdRef: { type: Schema.Types.ObjectId }
});
export default model('common_types', commonTypesSchema, 'commonTypes');
