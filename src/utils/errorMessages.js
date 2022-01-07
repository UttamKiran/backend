/**
 * Error Messages
 * All error code and error messages are exported from here
 */

const message = {
	something_went_wrong: {
		errorCode: '503',
		message: 'Something went wrong.'
	},
	role_not_exist: {
		errorCode: '404',
		message: 'Role not found.'
	},
	username_already_exist: {
		errorCode: '503',
		message: 'Username already exist.'
	},
	username_not_found: {
		errorCode: '404',
		message: 'User does not exist.'
	},
	field_not_found: {
		errorCode: '404',
		message: 'Field should be from jvMaster,jvMarketMaster,PortfolioMaster or PracticeMaster.'
	},
	data_not_found: {
		errorCode: '404',
		message: 'Data not found.'
	}
};

export default message;
