import { helper } from './index';

const payload = {
	createUser: {
		success: {
			fn: 'UnitTest',
			mn: 'UnitTest',
			ln: 'UnitTest',
			un: `${helper.uniqueString()}@Unittest.com`,
			busEntity: 'UnitTest',
			title: 'UnitTest',
			empId: 'UnitTest',
			primaryOff: 'UnitTest',
			mgrRef: helper.customObjectId(),
			mgr: 'UnitTest',
			cellNum: '987654321',
			workNum: '987654321',
			hidePHI: true,
			roleRef: 'physicianleader',
			isActive: true,
			crtdRef: 'UnitTest',
			crtdUN: 'UnitTest',
			crtdTZ: 'UnitTest',
			lan: [
				{
					lanRef: 1212,
					lan: 'UnitTest'
				}
			],
			cred: [
				{
					credRef: 112,
					cred: 'UnitTest'
				}
			],
			access: [
				{
					accessRef: 1212,
					strtDate: '2021-11-17',
					portfolioRef: 1212,
					portfolioName: 'UnitTest',
					marketRef: 1212,
					marketName: 'UnitTest',
					jvRef: 1212,
					jvName: 'UnitTest',
					practiceRef: 121,
					practiceName: 'UnitTest'
				}
			]
		},
		validationCheck1: {
			mn: 'UnitTest',
			ln: 'UnitTest',
			un: `${helper.uniqueString()}@Unittest.com`,
			busEntity: 'UnitTest',
			title: 'UnitTest',
			empId: 'UnitTest',
			primaryOff: 'UnitTest',
			mgrRef: helper.customObjectId(),
			mgr: 'UnitTest',
			cellNum: '987654321',
			workNum: '987654321',
			hidePHI: true,
			roleRef: 'physicianleader',
			isActive: true,
			crtdRef: 'UnitTest',
			crtdUN: 'UnitTest',
			crtdTZ: 'UnitTest',
			lan: [
				{
					lanRef: 1212,
					lan: 'UnitTest'
				}
			],
			cred: [
				{
					credRef: 112,
					cred: 'UnitTest'
				}
			],
			access: [
				{
					accessRef: 1212,
					strtDate: '2021-11-17',
					portfolioRef: 1212,
					portfolioName: 'UnitTest',
					marketRef: 1212,
					marketName: 'UnitTest',
					jvRef: 1212,
					jvName: 'UnitTest',
					practiceRef: 121,
					practiceName: 'UnitTest'
				}
			]
		},
		validationCheck2: {
			fn: 'UnitTest',
			mn: 'UnitTest',
			ln: 'UnitTest',
			un: `${helper.uniqueString()}@Unittest.com`,
			busEntity: 'UnitTest',
			title: 'UnitTest',
			empId: 'UnitTest',
			primaryOff: 'UnitTest',
			mgrRef: helper.customObjectId(),
			mgr: 'UnitTest',
			cellNum: '987654321',
			workNum: '987654321',
			hidePHI: true,
			roleRef: 'wrongRoleRef',
			isActive: true,
			crtdRef: 'UnitTest',
			crtdUN: 'UnitTest',
			crtdTZ: 'UnitTest',
			lan: [
				{
					lanRef: 1212,
					lan: 'UnitTest'
				}
			],
			cred: [
				{
					credRef: 112,
					cred: 'UnitTest'
				}
			],
			access: [
				{
					accessRef: 1212,
					strtDate: '2021-11-17',
					portfolioRef: 1212,
					portfolioName: 'UnitTest',
					marketRef: 1212,
					marketName: 'UnitTest',
					jvRef: 1212,
					jvName: 'UnitTest',
					practiceRef: 121,
					practiceName: 'UnitTest'
				}
			]
		},
		validationCheck3: {
			fn: 'UnitTest',
			mn: 'UnitTest',
			ln: 'UnitTest',
			un: `${helper.uniqueString()}@Unittest.com`,
			busEntity: 'UnitTest',
			title: 'UnitTest',
			empId: 'UnitTest',
			primaryOff: 'UnitTest',
			mgrRef: helper.customObjectId(),
			mgr: 'UnitTest',
			cellNum: '987654321',
			workNum: '987654321',
			hidePHI: true,
			roleRef: 'physicianleader',
			isActive: true,
			crtdRef: 'UnitTest',
			crtdUN: 'UnitTest',
			crtdTZ: 'UnitTest',
			lan: [
				{
					lanRef: 1212,
					lan: 'UnitTest'
				}
			],
			cred: [
				{
					credRef: 112,
					cred: 'UnitTest'
				}
			],
			access: [
				{
					accessRef: 1212,
					strtDate: '2021-11-17',
					portfolioRef: 1212,
					portfolioName: 'UnitTest',
					marketRef: 1212,
					marketName: 'UnitTest',
					jvRef: 1212,
					jvName: 'UnitTest',
					practiceRef: 121,
					practiceName: 'UnitTest'
				},
				{
					accessRef: 1212, // Duplicate access
					strtDate: '2021-11-17',
					portfolioRef: 1212,
					portfolioName: 'UnitTest',
					marketRef: 1212,
					marketName: 'UnitTest',
					jvRef: 1212,
					jvName: 'UnitTest',
					practiceRef: 121,
					practiceName: 'UnitTest'
				}
			]
		}
	},
	getUserList: {
		success: {
			fn: 'test',
			ln: '',
			roleRef: 'administrator',
			isActive: 2,
			portfolioRef: 1,
			marketRef: 1,
			jvRef: 1,
			practiceRef: 1,
			page: 1
		},
		validationCheck1: {
			fn: 'test',
			ln: '',
			roleRef: 'administrator',
			isActive: 2,
			portfolioRef: 'abc', // string in place of integer
			marketRef: 1,
			jvRef: 1,
			practiceRef: 1,
			page: 1
		},
		validationCheck2: {
			fn: 'test',
			ln: '',
			roleRef: 'administrator',
			isActive: 2,
			portfolioRef: 1,
			marketRef: 1,
			jvRef: 1,
			practiceRef: 1
			// missing required parameter 'page'
		}
	},
	updateUser: {
		sucess: {
			fn: 'testName',
			mn: 'Mid Name',
			ln: 'lastname',
			busEntity: 'honest',
			title: 'Mr.',
			empId: 'h001',
			primaryOff: 'New york city',
			mgrRef: '111111111111111111111111',
			mgr: 'Admin User',
			cellNum: '9876543210',
			workNum: '9876543210',
			hidePHI: false,
			permissions: [
				'navigationpatientsearch',
				'patientsearchadvancedsearch',
				'patientspatientlist'
			],
			roleRef: 'administrator',
			roleVal: 'Administrator',
			isActive: false,
			updTZ: 'IndianTimeZone',
			updUN: 'testuser@test.com',
			updRef: '111111111111111111111111',
			access: [
				{
					_id: '61adb6092806e434128587b2',
					accessRef: 1,
					portfolioRef: 1,
					portfolioName: 'Honest',
					marketRef: 1,
					marketName: 'Buffalo',
					jvRef: 1,
					jvName: 'PCIPA 1',
					practiceRef: 1,
					practiceName: 'Albany Family medicine',
					strtDate: '2021-11-22T00:00:00.000Z'
				}
			],
			lan: [
				{
					_id: '61adb6092806e434128587b6',
					lanRef: 4526,
					lan: 'German'
				}
			],
			cred: [
				{
					_id: '61adb6092806e434128587b8',
					credRef: 4351,
					cred: 'MD'
				}
			]
		},
		validationCheck1: {
			un: 'email@testName', // un (user name) in request body
			fn: 'testName',
			mn: 'Mid Name',
			ln: 'lastname',
			busEntity: 'honest',
			title: 'Mr.'
		},
		validationCheck2: {
			access: [
				{
					_id: '61adb6092806e434128587b2',
					accessRef: 1,
					portfolioRef: 'abc', // string in place of number
					portfolioName: 'Honest',
					marketRef: 1,
					marketName: 'Buffalo',
					jvRef: 1,
					jvName: 'PCIPA 1',
					practiceRef: 1,
					practiceName: 'Albany Family medicine',
					strtDate: '2021-11-22T00:00:00.000Z'
				}
			]
		},
		validationCheck3: {
			access: [
				{
					_id: '61adb6092806e434128587b2',
					accessRef: 1,
					portfolioRef: 1,
					portfolioName: 'Honest',
					marketRef: 1,
					marketName: 'Buffalo',
					jvRef: 1,
					jvName: 'PCIPA 1',
					practiceRef: 1,
					practiceName: 'Albany Family medicine',
					strtDate: '2021-11-22T00:00:00.000Z'
				},
				{
					accessRef: 1, // Duplicate access
					portfolioRef: 1,
					portfolioName: 'Honest',
					marketRef: 1,
					marketName: 'Buffalo',
					jvRef: 1,
					jvName: 'PCIPA 1',
					practiceRef: 1,
					practiceName: 'Albany Family medicine',
					strtDate: '2021-11-22T00:00:00.000Z'
				}
			]
		}
	},
	access: {
		jvMaster: {
			field: 'jvMaster',
			name: 'PC'
		},
		jvMarketMaster: {
			field: 'jvMarketMaster',
			name: 'Albany'
		},
		PortfolioMaster: {
			field: 'PortfolioMaster',
			name: 'Honest'
		},
		PracticeMaster: {
			field: 'PracticeMaster',
			name: 'Albany'
		}
	},
	getAccessDropdown: {
		successCheck1: {
			all: false,
			currentField: 'portfolioName',
			portfolioName: ['Honest']
		},
		successCheck2: {
			all: false,
			currentField: 'marketName',
			portfolioName: ['Honest'],
			marketName: ['Buffalo']
		},
		successCheck3: {
			all: false,
			currentField: 'jvName',
			portfolioName: ['Honest'],
			marketName: ['Buffalo'],
			jvName: ['PCIPA 1']
		},
		successCheck4: {
			all: false,
			currentField: 'practiceName',
			portfolioName: ['Honest'],
			marketName: ['Buffalo'],
			jvName: ['PCIPA 1'],
			practiceName: ['Albany Family medicine']
		},
		validationCheck1: {
			currentField: 'portfolioName',
			portfolioName: ['Honest']
		}
	},
	getMgrName: {
		success: { name: 'Ma' },
		notFound: { name: ';;;;;;' }
	}
};

export default payload;
