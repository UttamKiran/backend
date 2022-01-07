import { Schema, model } from 'mongoose';

const AccessSchema = new Schema({
	_id: { type: Number, unique: true },
	portfolioRef: { type: Number, unique: true },
	portfolioName: { type: String, required: true, maxlength: 500 },
	marketRef: { type: Number, required: true },
	marketName: { type: String, required: true, maxlength: 500 },
	jvRef: { type: Number, required: true },
	jvName: { type: String, required: true, maxlength: 500 },
	practiceRef: { type: Number, required: true },
	practiceName: { type: String, required: true, maxlength: 500 },
	crtdOn: { type: Date, required: true },
	crtdRef: { type: Schema.Types.ObjectId, required: true },
	crtdUN: { type: String, required: true },
	crtdTZ: { type: String, required: true }
});

export default model('access', AccessSchema, 'access');
