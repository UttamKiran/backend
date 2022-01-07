import { sendSuccess, sendFailure } from '../helpers';
import { UserService } from '../services';
import { errorMessage, utilFunctions } from '../utils';

var ObjectId = require('mongodb').ObjectId;

/**
 * Get List of all Users based on search criteria
 * @route: /api/user
 * @method: GET
 * @returns: Array{users}
 */
export async function getUsersList(req, res) {
	const { query } = req;
	const projection = {
		_id: 1,
		fn: 1,
		mn: 1,
		ln: 1,
		un: 1,
		roleVal: 1,
		isActive: 1
	};
	const data = await UserService.searchUser(query, projection);
	return sendSuccess(res, {
		data,
		status: 200
	});
}

/**
 * Create User
 * @route: /api/user
 * @method: POST
 * @returns: User Object
 */
export async function createUser(req, res) {
	let condition = { _id: req.body.roleRef };
	let role = await UserService.getRoles(condition);
	if (role.length < 1) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.role_not_exist.errorCode,
				error: errorMessage.role_not_exist.message
			},
			404
		);
	}

	/* If userName exist or not */
	let userCondition = { un: req.body.un };
	let userNameExist = await UserService.findUser(userCondition);
	if (userNameExist.length >= 1) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.username_already_exist.errorCode,
				error: errorMessage.username_already_exist.message
			},
			503
		);
	}
	let access = [];
	if (req.body.access) {
		access = utilFunctions.removeDuplicateAccess(req.body.access);
	}
	/* Body to insert */
	let data = {
		fn: req.body.fn,
		mn: req.body.mn,
		ln: req.body.ln,
		un: req.body.un,
		busEntity: req.body.busEntity,
		title: req.body.title,
		empId: req.body.empId, // Need to be long
		primaryOff: req.body.primaryOff,
		mgrRef: ObjectId(req.body.mgrRef),
		mgr: req.body.mgr,
		cellNum: req.body.cellNum,
		workNum: req.body.workNum,
		hidePHI: req.body.hidePHI,
		permissions: role[0].permissions,
		roleRef: req.body.roleRef,
		roleVal: role[0].name,
		isActive: req.body.isActive,
		crtdOn: utilFunctions.getUtcDate(),
		crtdRef: ObjectId('507f191e810c19729de860ea'), // need to update it from token
		crtdUN: req.body.crtdUN,
		crtdTZ: req.body.crtdTZ,
		cred: req.body.cred,
		lan: req.body.lan,
		access: access
	};
	/* Push data to model */
	let response = await UserService.insertUser(data);
	return sendSuccess(res, {
		message: 'User created successfully.',
		data: response,
		status: 200
	});
}

/**
 * Get User by Id
 * @route: /api/user/{{UserId}}
 * @method: GET
 * @returns: User Object
 */
export async function getUsersById(req, res) {
	let condition = { _id: ObjectId(req.params.id) };
	const data = await UserService.getUserByID(condition);

	if (!data) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.username_not_found.errorCode,
				error: errorMessage.username_not_found.message
			},
			404
		);
	}
	return sendSuccess(res, { data: data, status: 200 });
}

/**
 * Get Access Master data by name and field
 * @route: /api/user/getAccessMaster
 * @method: GET
 * @returns Array Access Master
 */
export async function getAccessMaster(req, res) {
	let data;
	if (req.query.field == 'jvMaster') {
		data = await UserService.getJvMaster({ name: { $regex: req.query.name } }, { name: 1, _id: 1 });
	} else if (req.query.field == 'jvMarketMaster') {
		data = await UserService.getMarketMaster(
			{ name: { $regex: req.query.name } },
			{ name: 1, _id: 1 }
		);
	} else if (req.query.field == 'PortfolioMaster') {
		data = await UserService.getPortfolioMaster(
			{ name: { $regex: req.query.name } },
			{ name: 1, _id: 1 }
		);
	} else if (req.query.field == 'PracticeMaster') {
		data = await UserService.getPracticeMaster(
			{ name: { $regex: req.query.name } },
			{ name: 1, _id: 1 }
		);
	} else {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.field_not_found.errorCode,
				error: errorMessage.field_not_found.message
			},
			404
		);
	}
	return sendSuccess(res, { data: data, status: 200 });
}

/**
 * Get common types from collection
 * @route: /api/user/getCommonTypes
 * @method: GET
 * @returns Array Common Types
 */
export async function getCommonTypes(req, res) {
	let data = await UserService.getCommonTypes({}, { id: 1, val: 1, desc: 1 });
	if (data.length < 1) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.data_not_found.errorCode,
				error: errorMessage.data_not_found.message
			},
			404
		);
	}
	return sendSuccess(res, { data: data, status: 200 });
}

/**
 * Get common master from collection
 * @route: /api/user/getCommonMaster/{{commonTypeId}}
 * @method: GET
 * @returns Array
 */
export async function getCommonMaster(req, res) {
	let data = await UserService.getCommonMaster(
		{ typeRef: req.params.commonTypeId, isDisp: true },
		{ _id: 1, typeRef: 1, desc: 1, order: 1, val: 1 }
	);
	if (data.length < 1) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.data_not_found.errorCode,
				error: errorMessage.data_not_found.message
			},
			404
		);
	}
	return sendSuccess(res, { data: data, status: 200 });
}

/**
 * Get roles from collection
 * @route: /api/user/getRoles
 * @method: GET
 * @returns Array roles
 */
export async function getRoles(req, res) {
	let data = await UserService.getRoles({}, { _id: 1, name: 1 });
	if (data.length < 1) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.data_not_found.errorCode,
				error: errorMessage.data_not_found.message
			},
			404
		);
	}
	return sendSuccess(res, { data: data, status: 200 });
}

/**
 * Get manager details collection
 * @route: /api/user/getMgrName
 * @method: GET
 * @returns Array User Object
 */
export async function getMgrName(req, res) {
	let condition = {
		$or: [
			{ fn: { $regex: req.query.name, $options: 'i' } },
			{ ln: { $regex: req.query.name, $options: 'i' } }
		]
	};
	let data = await UserService.findMgr(condition, { _id: 1, fn: 1, ln: 1 });
	if (data.length < 1) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.data_not_found.errorCode,
				error: errorMessage.data_not_found.message
			},
			404
		);
	}
	return sendSuccess(res, { data: data, status: 200 });
}

/**
 * Update User, Update Access
 * @route: /api/user/{{userId}}
 * @method: Patch
 * @returns: Updated User Object
 */
export async function updateUserById(req, res) {
	let userId = { _id: ObjectId(req.params.id) };
	const projection = {
		_id: 1,
		fn: 1,
		mn: 1,
		ln: 1,
		un: 1,
		busEntity: 1,
		title: 1,
		empId: 1,
		primaryOff: 1,
		mgrRef: 1,
		mgr: 1,
		cellNum: 1,
		workNum: 1,
		hidePHI: 1,
		roleRef: 1,
		roleVal: 1,
		isActive: 1,
		updOn: 1,
		access: 1,
		cred: 1,
		lan: 1
	};

	let updateObj = req.body;
	if (updateObj.access) {
		let access = utilFunctions.removeDuplicateAccess(updateObj.access);
		Array.isArray(access) ? (updateObj.access = access) : false;
	}
	const data = await UserService.updateUserById(userId, updateObj, projection);

	if (!data) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.username_not_found.errorCode,
				error: errorMessage.username_not_found.message
			},
			404
		);
	}
	return sendSuccess(res, {
		message: 'User profile successfully updated',
		data: data,
		status: 200
	});
}

/**
 * Get access combination
 * @route: /user/api/user/getAccessDropdown
 * @method: Post
 * @returns: Get access combination
 */
export async function getAccessDropdown(req, res) {
	let condition,
		project = {};
	if (req.body.portfolioName)
		condition = { portfolioName: { $regex: req.body.portfolioName[0], $options: 'i' } };
	project = { portfolioRef: 1, portfolioName: 1 };

	if (req.body.marketName) {
		condition = {
			portfolioName: { $in: req.body.portfolioName },
			marketName: { $regex: req.body.marketName[0], $options: 'i' }
		};
		project = { marketName: 1, marketRef: 1 };
	}

	if (req.body.jvName) {
		condition = {
			portfolioName: { $in: req.body.portfolioName },
			marketName: { $in: req.body.marketName },
			jvName: { $regex: req.body.jvName[0], $options: 'i' }
		};
		project = { jvName: 1, jvRef: 1 };
	}

	if (req.body.practiceName) {
		if (!req.body.all)
				// For practice Non All option 
				condition = {
					portfolioName: { $in: req.body.portfolioName },
					marketName: { $in: req.body.marketName },
					jvName: { $in: req.body.jvName },
					practiceName: { $regex: req.body.practiceName[0], $options: 'i' }
				};
		else {
			condition = {
				portfolioName: { $in: req.body.portfolioName },
				marketName: { $in: req.body.marketName },
				jvName: { $in: req.body.jvName },
				practiceName: { $in: req.body.practiceName }
			};
			if(req.body.practiceAll)
			delete condition.practiceName;
		}
			

		project = { practiceName: 1, practiceRef: 1 };
	}

	if (req.body.all || req.body.practiceAll) project = {};

	var data = await UserService.getDatafromAccess(condition, project);
	if (!req.body.all) {
		data = utilFunctions.getUniqueArrayByProp(data, req.body.currentField);
	}
	if (!data) {
		return sendFailure(
			res,
			{
				errorCode: errorMessage.username_not_found.errorCode,
				error: errorMessage.username_not_found.message
			},
			404
		);
	}
	return sendSuccess(res, { data: data, status: 200 });
}
