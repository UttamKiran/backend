import { Joi } from 'express-validation';

Joi.objectId = require('joi-objectid')(Joi);

export const userValidator = {
	// POST /api/user
	createUser: {
		body: Joi.object({
			fn: Joi.string().required().trim(),
			mn: Joi.string().trim(),
			ln: Joi.string().required().trim(),
			un: Joi.string().email().required().trim().label('un'),
			busEntity: Joi.string().trim(),
			title: Joi.string().trim(),
			empId: Joi.string(),
			primaryOff: Joi.string().trim(),
			mgrRef: Joi.string().trim(),
			mgr: Joi.string().trim(),
			cellNum: Joi.string().trim(),
			workNum: Joi.string().trim(),
			hidePHI: Joi.boolean(),
			roleRef: Joi.string().required().trim(),
			isActive: Joi.boolean(),
			crtdRef: Joi.string().trim(),
			crtdUN: Joi.string().required().trim(),
			crtdTZ: Joi.string().required().trim(),
			access: Joi.array()
				.items({
					accessRef: Joi.number().required(),
					strtDate: Joi.date().required(),
					portfolioRef: Joi.number().required(),
					portfolioName: Joi.string().required(),
					marketRef: Joi.number().required(),
					marketName: Joi.string().required(),
					jvRef: Joi.number().required(),
					jvName: Joi.string().required(),
					practiceRef: Joi.number().required(),
					practiceName: Joi.string().required()
				}),
			cred: Joi.array().items({
				credRef: Joi.number().required(),
				cred: Joi.string().required()
			}),
			lan: Joi.array().items({
				lanRef: Joi.number().required(),
				lan: Joi.string().required()
			})
		})
	},
	// GET /api/user
	getUserList: {
		query: Joi.object({
			fn: Joi.string().trim().allow(''),
			ln: Joi.string().trim().allow(''),
			roleRef: Joi.string().trim().allow(''),
			isActive: Joi.number().greater(-1).less(3),
			portfolioRef: Joi.number(),
			marketRef: Joi.number(),
			jvRef: Joi.number(),
			practiceRef: Joi.number(),
			page: Joi.number().required().greater(0)
		})
	},
	// PATCH /api/user/{_id}
	updateUser: {
		params: Joi.object().keys({
			id: Joi.objectId().required()
		}),
		body: Joi.object().keys({
			_id: Joi.objectId(),
			fn: Joi.string().trim(),
			mn: Joi.string().trim(),
			ln: Joi.string().trim(),
			busEntity: Joi.string().trim(),
			title: Joi.string().trim(),
			empId: Joi.string(),
			primaryOff: Joi.string().trim(),
			mgrRef: Joi.string().trim(), // need to change to ObjId
			mgr: Joi.string().trim(),
			cellNum: Joi.string().trim(),
			workNum: Joi.string().trim(),
			hidePHI: Joi.boolean(),
			permissions: Joi.array().items(Joi.string()),
			roleRef: Joi.string().trim(),
			roleVal: Joi.string().trim(),
			isActive: Joi.boolean(),
			updRef: Joi.string().trim(), // need to change to ObjId
			updUN: Joi.string().trim(),
			updTZ: Joi.string().trim(),
			cred: Joi.array().items(
				Joi.object().keys({
					_id: Joi.objectId(),
					credRef: Joi.number(),
					cred: Joi.string()
				})
			),
			lan: Joi.array().items(
				Joi.object().keys({
					_id: Joi.objectId(),
					lanRef: Joi.number(),
					lan: Joi.string()
				})
			),
			access: Joi.array().items(
				Joi.object().keys({
					_id: Joi.objectId(),
					accessRef: Joi.number().required(),
					strtDate: Joi.date(),
					portfolioRef: Joi.number(),
					portfolioName: Joi.string(),
					marketRef: Joi.number(),
					marketName: Joi.string(),
					jvRef: Joi.number(),
					jvName: Joi.string(),
					practiceRef: Joi.number(),
					practiceName: Joi.string()
				})
			)
		})
	},
	getAccessMaster: {
		query: Joi.object({
			name: Joi.string().required(),
			field: Joi.string().required()
		})
	},
	getUserById: {
		params: Joi.object({
			id: Joi.objectId()
		})
	},
	getMgrName: {
		query: Joi.object({
			name: Joi.string().required().trim()
		})
	},
	getCommonMaster: {
		params: Joi.object({
			commonTypeId: Joi.number().required()
		})
	},
	getAccessDropdown: {
		body: Joi.object({
			all: Joi.boolean().required(),
			portfolioName: Joi.array().required()
		}).unknown(true)
	}
};
export default userValidator;
