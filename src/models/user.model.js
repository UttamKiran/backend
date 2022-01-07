import { Schema, model } from 'mongoose';

import { paginate } from './plugins';

const access = new Schema({
	accessRef: { type: Number, required: true },
	strtDate: { type: Date, required: true },
	portfolioRef: { type: Number, required: true },
	portfolioName: { type: String, maxlength: 500, required: true },
	marketRef: { type: Number, required: true },
	marketName: { type: String, required: true, maxlength: 500 },
	jvRef: { type: Number, required: true },
	jvName: { type: String, required: true, maxlength: 500 },
	practiceRef: { type: Number, required: true },
	practiceName: { type: String, required: true, maxlength: 500 }
});

const userPatientList = new Schema({
	pRef: { type: Number, required: true },
	bStarred: { type: Boolean, required: true },
	bRecent: { type: Boolean, required: true },
	bOpened: { type: Boolean, required: true },
	starredDate: { type: Date, required: true },
	recentDate: { type: Date, required: true },
	openedOrder: { type: Number, required: true }
});

const cred = new Schema({
	credRef: { type: Number, required: true },
	cred: { type: String, required: true }
});

const lan = new Schema({
	lanRef: { type: Number, required: true },
	lan: { type: String, required: true }
});

const UserSchema = new Schema({
	fn: { type: String, required: true, maxlength: 50 },
	mn: { type: String, maxlength: 50 },
	ln: { type: String, required: true, maxlength: 50 },
	un: { type: String, required: true, unique: true, maxlength: 256 },
	busEntity: { type: String },
	title: { type: String, maxlength: 50 },
	empId: { type: String },
	primaryOff: { type: String },
	mgrRef: { type: Schema.Types.ObjectId },
	mgr: { type: String, maxlength: 200 },
	cellNum: { type: String }, // Changed from Int to String
	workNum: { type: String }, // Changed from Int to String
	hidePHI: { type: Boolean },
	permissions: [String],
	roleRef: { type: String, required: true },
	roleVal: { type: String },
	isActive: { type: Boolean },
	crtdOn: { type: Date },
	crtdRef: { type: Schema.Types.ObjectId, required: true },
	crtdUN: { type: String, required: true },
	crtdTZ: { type: String, required: true },
	updOn: { type: Date },
	updRef: { type: Schema.Types.ObjectId },
	updUN: { type: String },
	updTZ: { type: String },
	access: [access],
	cred: [cred],
	lan: [lan],
	userPatientList: [userPatientList]
});

// add plugin
UserSchema.plugin(paginate);

export default model('user', UserSchema);
