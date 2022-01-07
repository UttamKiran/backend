import { Schema, model } from 'mongoose';

const PermissionSchema = new Schema({
	name: { type: String, required: true },
	desc: { type: String },
	crtdOn: { type: Date, required: true },
	crtdRef: { type: Schema.Types.ObjectId, required: true },
	crtdUN: { type: String, required: true },
	crtdTZ: { type: String, required: true }
});

export default model('permissions', PermissionSchema);
