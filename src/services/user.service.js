import {
	User,
	jvMaster,
	marketMaster,
	portfolioMaster,
	practiceMaster,
	commonMaster,
	commonTypes,
	Role,
	access
} from '../models';
import { utilFunctions } from '../utils';

export const searchUser = async (query, projection) => {
	const filter = utilFunctions.searchUserObject(query, ['fn', 'ln', 'roleRef', 'isActive']);
	const accessLevelFilter = utilFunctions.searchUserObject(query, [
		'portfolioRef',
		'marketRef',
		'practiceRef',
		'jvRef'
	]);
	const options = utilFunctions.searchUserObject(query, ['sortBy', 'limit', 'page']);

	if (Object.keys(accessLevelFilter).length > 0) {
		filter.access = {
			$elemMatch: accessLevelFilter
		};
	}
	return User.paginate(filter, options, projection);
};

export const updateUserById = async (filter, updateObj, projection) => {
	updateObj.updOn = utilFunctions.getUtcDate();
	return User.findOneAndUpdate(filter, updateObj, { new: true, projection: projection });
};

export const getAllUser = async (condition, sort, skip, limit) => {
	return User.find(condition).sort(sort).skip(skip).limit(limit);
};

export const insertUser = async data => {
	return User.create(data);
};

export const findUser = async condition => {
	return User.find(condition);
};

export const getUserByID = async condition => {
	return User.findOne(condition);
};

export const getJvMaster = async (condition, project) => {
	return jvMaster.find(condition, project);
};

export const getMarketMaster = async (condition, project) => {
	return marketMaster.find(condition, project);
};

export const getPortfolioMaster = async (condition, project) => {
	return portfolioMaster.find(condition, project);
};

export const getPracticeMaster = async (condition, project) => {
	return practiceMaster.find(condition, project);
};

export const getCommonTypes = async (condition, project) => {
	return commonTypes.find(condition, project);
};

export const getCommonMaster = async (condition, project) => {
	return commonMaster.find(condition, project);
};

export const getRoles = async (condition, project) => {
	return Role.find(condition, project);
};

export const findMgr = async (condition, project) => {
	return User.find(condition, project);
};

export const getDatafromAccess = async (condition, project) => {
	return access.find(condition, project);
};
