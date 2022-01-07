import { Schema, model } from 'mongoose';

const RolesSchema = new Schema({
	_id: { type: String, maxlength: 50, match: '^[a-z0-9_-]+$' },
	name: { type: String, required: true, maxlength: 50 },
	desc: { type: String },
	permissions: [String],
	ptAssignApplicable: { type: Boolean },
	ptAssignMandatory: { type: Boolean },
	crtdOn: { type: Date, required: true },
	crtdRef: { type: Schema.Types.ObjectId, required: true },
	crtdUN: { type: String, required: true },
	crtdTZ: { type: String, required: true }
});

export default model('roles', RolesSchema);
