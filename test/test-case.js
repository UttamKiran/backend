import { assert, request, use, should } from 'chai';
import chaiHttp from 'chai-http';

import server from '../src/index';
import payload from './utils/payload';

const expect = require('chai').expect;

should();

use(chaiHttp);

/*
All test cases 
which are 
common
*/
describe('Common Services /user/api/user', async () => {
	afterEach(() => {
		server.close();
	});

	it('Get Roles Case, Success Case -- Get', async () => {
		const response = await request(server).get('/user/api/user/getRoles');
		response.should.have.status(200);
	});

	it('Get AccessMasterJvMaster Case, Success Case -- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/getAccessMaster')
			.query(payload.access.jvMaster);
		response.should.have.status(200);
		assert(Array.isArray(response.body.data));
	});

	it('Get AccessMasterMarketMaster, Success Case -- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/getAccessMaster')
			.query(payload.access.jvMarketMaster);
		response.should.have.status(200);
		assert(Array.isArray(response.body.data));
	});

	it('Get AccessMasterPortfolioMaster, Success Case -- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/getAccessMaster')
			.query(payload.access.PortfolioMaster);
		response.should.have.status(200);
		assert(Array.isArray(response.body.data));
	});

	it('Get AccessMasterPracticeMaster, Success Case -- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/getAccessMaster')
			.query(payload.access.PracticeMaster);
		response.should.have.status(200);
		assert(Array.isArray(response.body.data));
	});

	let commonTypeId = 1;
	it('Get Common Types, Success Case -- GET', async () => {
		const response = await request(server).get('/user/api/user/getCommonTypes');
		assert(Array.isArray(response.body.data) && response.body.data.length >= 0);
		commonTypeId = response.body.data[0]._id;
		response.should.have.status(200);
	});

	it('Get Common Master, Success Case -- GET', async () => {
		const response = await request(server).get(`/user/api/user/getCommonMaster/${commonTypeId}`);
		assert(Array.isArray(response.body.data) && response.body.data.length >= 0);
		response.should.have.status(200);
	});

	it('Get Access combination, Validation check 1 (required parameter)-- POST', async () => {
		const response = await request(server)
			.post('/user/api/user/getAccessDropdown')
			.send(payload.getAccessDropdown.successCheck1);
		response.should.have.status(200);
	});

	it('Get Access combination, Success check 2 (required parameter)-- POST', async () => {
		const response = await request(server)
			.post('/user/api/user/getAccessDropdown')
			.send(payload.getAccessDropdown.successCheck2);
		response.should.have.status(200);
	});

	it('Get Access combination, Success check 3 (required parameter)-- POST', async () => {
		const response = await request(server)
			.post('/user/api/user/getAccessDropdown')
			.send(payload.getAccessDropdown.successCheck3);
		response.should.have.status(200);
	});

	it('Get Access combination, Success check 4 (required parameter)-- POST', async () => {
		const response = await request(server)
			.post('/user/api/user/getAccessDropdown')
			.send(payload.getAccessDropdown.successCheck4);
		response.should.have.status(200);
	});

	it('Get Access combination, Validation check (required param missing) -- POST', async () => {
		const response = await request(server)
			.post('/user/api/user/getAccessDropdown')
			.send(payload.getAccessDropdown.validationCheck1);
		response.should.have.status(400);
	});

	it('Get Manager from User, -- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/getMgrName')
			.query(payload.getMgrName.success);
		response.should.have.status(200);
	});

	it('Get Manager from User, -- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/getMgrName')
			.query(payload.getMgrName.notFound);
		response.should.have.status(404);
	});
});

describe('User Management /user/api/user', async () => {
	afterEach(() => {
		server.close();
	});
	var userID;
	/**
	 *  Create User
	 */
	it('Create User Case, Success Case -- POST', async () => {
		const response = await request(server).post('/user/api/user/').send(payload.createUser.success);
		userID = response.body.data._id;
		expect(response.body.data).to.be.an('object');
		response.should.have.status(200);
	});

	it('Create User Case, Validation Check -- POST', async () => {
		const response = await request(server)
			.post('/user/api/user/')
			.send(payload.createUser.validationCheck1);
		response.should.have.status(400);
	});

	it('Create User Case, Validation Check, Role Not Exist -- POST', async () => {
		const response = await request(server)
			.post('/user/api/user/')
			.send(payload.createUser.validationCheck2);
		response.should.have.status(404);
		response.body.errorCode.should.equal('404');
	});

	it('Create User Case, Validation Check3 (Duplicate Access) -- POST', async () => {
		const response = await request(server)
			.post('/user/api/user/')
			.send(payload.createUser.validationCheck3);
		response.should.have.status(200);
		expect(response.body.data).to.be.an('object');
		assert(Array.isArray(response.body.data.access));
		assert(response.body.data.access.length === 1);
	});

	it('Get User By Id, Success Case -- GET', async () => {
		const response = await request(server).get(`/user/api/user/${userID}`);
		response.should.have.status(200);
	});

	/**
	 *  Get user list based on search criteria
	 */
	it('Get User List, Success Case -- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/')
			.query(payload.getUserList.success);
		response.should.have.status(200);
		expect(response.body.data).to.be.an('object');
		assert(Array.isArray(response.body.data.results));
		assert(
			typeof response.body.data.isPreviousAvailable === 'boolean' &&
				typeof response.body.data.isNextAvailable === 'boolean'
		);
	});

	it('Get User List, Validation check (invalid data type)-- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/')
			.query(payload.getUserList.validationCheck1);
		response.should.have.status(400);
	});

	it('Get User List, Validation check (required parameter)-- GET', async () => {
		const response = await request(server)
			.get('/user/api/user/')
			.query(payload.getUserList.validationCheck2);
		response.should.have.status(400);
	});

	/**
	 *  Update User
	 */
	it('Update User, Success Case -- Patch', async () => {
		const response = await request(server)
			.patch(`/user/api/user/${userID}`)
			.send(payload.updateUser.sucess);
		response.should.have.status(200);
		expect(response.body.data).to.be.an('object');
	});

	it('Update User, user not found -- Patch', async () => {
		let userId = '619f663283429a3153783542';
		const response = await request(server)
			.patch(`/user/api/user/${userId}`)
			.send(payload.updateUser.sucess);
		response.should.have.status(404);
	});

	it('Update User, Validation check1 "username" cannot be updated -- PATCH', async () => {
		const response = await request(server)
			.patch(`/user/api/user/${userID}`)
			.send(payload.updateUser.validationCheck1);
		response.should.have.status(400);
	});

	it('Update User, Validation check2 (invalid data type) -- PATCH', async () => {
		const response = await request(server)
			.patch(`/user/api/user/${userID}`)
			.send(payload.updateUser.validationCheck2);
		response.should.have.status(400);
	});

	it('Update User, Validation check3 (Duplicate Access) -- PATCH', async () => {
		const response = await request(server)
			.patch(`/user/api/user/${userID}`)
			.send(payload.updateUser.validationCheck3);
		response.should.have.status(200);
		expect(response.body.data).to.be.an('object');
		assert(Array.isArray(response.body.data.access));
		assert(response.body.data.access.length === 1);
	});
});
