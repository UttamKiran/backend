export default {
	'/user/api/user': {
		get: {
			summary: 'Get Users list',
			description: 'Get Users list',
			tags: ['User'],
			parameters: [
				{
					name: 'fn',
					in: 'query',
					description: 'first name',
					type: 'string'
				},
				{
					name: 'ln',
					in: 'query',
					description: 'last name',
					type: 'string'
				},

				{
					name: 'roleRef',
					in: 'query',
					description: 'role',
					type: 'string'
				},
				{
					name: 'portfolioRef',
					in: 'query',
					description: 'portfolio',
					type: 'number'
				},
				{
					name: 'marketRef',
					in: 'query',
					description: 'market',
					type: 'number'
				},
				{
					name: 'jvRef',
					in: 'query',
					description: 'jv',
					type: 'number'
				},
				{
					name: 'practiceRef',
					in: 'query',
					description: 'practice',
					type: 'number'
				},
				{
					name: 'isActive',
					in: 'query',
					description: 'status, possible values 0, 1, 2',
					type: 'number',
					minimum: 0,
					maximum: 2
				},
				{
					name: 'page',
					in: 'query',
					description: 'page',
					default: 1,
					required: true,
					type: 'number'
				}
			],
			responses: {
				200: {
					description: 'successful'
				},
				400: { description: 'failure' }
			}
		},
		post: {
			summary: 'Create User',
			description: 'Create User',
			tags: ['User'],
			parameters: [
				{
					name: 'user',
					in: 'body',
					description: 'The user object we want to create',
					required: true,
					schema: {
						required: ['email', '_id'],
						properties: {
							fn: {
								type: 'string',
								uniqueItems: true
							},
							mn: {
								type: 'string'
							},
							ln: {
								type: 'string'
							},
							un: {
								type: 'string'
							},
							busEntity: {
								type: 'string'
							},
							title: {
								type: 'string'
							},
							empId: {
								type: 'string'
							},
							primaryOff: {
								type: 'string'
							},
							mgrRef: {
								type: 'string'
							},
							mgr: {
								type: 'string'
							},
							cellNum: {
								type: 'string'
							},
							workNum: {
								type: 'string'
							},
							hidePHI: {
								type: 'boolean'
							},
							permissions: {
								type: 'array'
							},
							roleRef: {
								type: 'string'
							},
							isActive: {
								type: 'boolean'
							},
							crtdRef: {
								type: 'string'
							},
							crtdUN: {
								type: 'string'
							},
							crtdTZ: {
								type: 'string'
							},
							lan: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										lanRef: { type: 'number' },
										lan: { type: 'string' }
									}
								}
							},
							cred: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										credRef: { type: 'number' },
										cred: { type: 'string' }
									}
								}
							},

							access: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										accessRef: { type: 'number' },
										strtDate: { type: 'string' },
										portfolioRef: { type: 'string' },
										portfolioName: { type: 'string' },
										marketRef: { type: 'number' },
										marketName: { type: 'string' },
										jvRef: { type: 'number' },
										jvName: { type: 'string' },
										practiceRef: { type: 'number' },
										practiceName: { type: 'string' }
									}
								}
							}
						}
					}
				}
			],
			responses: {
				200: {
					description: 'successful'
				},
				206: { description: 'failure' }
			}
		}
	},
	'/user/api/user/{id}': {
		get: {
			summary: 'Get User by ID',
			description: 'Get User by ID',
			tags: ['User'],
			parameters: [
				{
					name: 'id',
					in: 'path',
					description: 'ID of user to return',
					required: true,
					type: 'string'
				}
			],
			responses: {
				200: { description: 'successful' },
				206: { description: 'failure' },
				400: { description: 'Invalid ID supplied' },
				404: { description: 'User not found' }
			}
		},
		patch: {
			summary: 'Update an existing User',
			description: 'Update an existing User by id',
			tags: ['User'],
			parameters: [
				{
					name: 'id',
					in: 'path',
					description: 'Id of user to update',
					required: true,
					type: 'string'
				},
				{
					name: 'user',
					in: 'body',
					description: 'The user object to update',
					required: true,
					schema: {
						required: ['_id'],
						properties: {
							fn: {
								type: 'string'
							},
							mn: {
								type: 'string'
							},
							ln: {
								type: 'string'
							},
							busEntity: {
								type: 'string'
							},
							title: {
								type: 'string'
							},
							empId: {
								type: 'string'
							},
							primaryOff: {
								type: 'string'
							},
							mgrRef: {
								type: 'string'
							},
							mgr: {
								type: 'string'
							},
							cellNum: {
								type: 'string'
							},
							workNum: {
								type: 'string'
							},
							hidePHI: {
								type: 'boolean'
							},
							permissions: {
								type: 'array',
								items: {
									type: 'string'
								}
							},
							roleRef: {
								type: 'string'
							},
							roleVal: {
								type: 'string'
							},
							isActive: {
								type: 'boolean'
							},
							updRef: {
								type: 'string'
							},
							updUN: {
								type: 'string'
							},
							updTZ: {
								type: 'string'
							},
							lan: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										lanRef: { type: 'number' },
										lan: { type: 'string' }
									}
								}
							},
							cred: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										credRef: { type: 'number' },
										cred: { type: 'string' }
									}
								}
							},
							access: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										accessRef: { type: 'number' },
										strtDate: { type: 'string' },
										portfolioRef: { type: 'string' },
										portfolioName: { type: 'string' },
										marketRef: { type: 'number' },
										marketName: { type: 'string' },
										jvRef: { type: 'number' },
										jvName: { type: 'string' },
										practiceRef: { type: 'number' },
										practiceName: { type: 'string' }
									}
								}
							}
						}
					}
				}
			],
			responses: {
				200: { description: 'successful' },
				// 206: { description: 'failure' },
				400: { description: 'Invalid request' },
				404: { description: 'User not found' }
				// 405: { description: 'Validation exception' }
			}
		}
	},
	'/user/api/user/getAccessMaster': {
		get: {
			summary: 'Get User access data',
			description: 'Get User Access data for dropdown',
			tags: ['User'],
			parameters: [
				{
					name: 'name',
					in: 'query',
					description: 'name',
					required: true,
					type: 'string'
				},
				{
					name: 'field',
					in: 'query',
					description: 'field from jvMaster,jvMarketMaster,PortfolioMaster or PracticeMaster',
					required: true,
					type: 'string'
				}
			],
			responses: {
				200: { description: 'successful' },
				206: { description: 'failure' },
				400: { description: 'Invalid ID supplied' },
				404: { description: 'User not found' }
			}
		}
	},
	'/user/api/user/getCommonTypes': {
		get: {
			summary: 'Get Common Types from Collection',
			description: 'Get Common Types',
			tags: ['User'],
			responses: {
				200: { description: 'successful' },
				206: { description: 'failure' },
				400: { description: 'Invalid ID supplied' },
				404: { description: 'User not found' }
			}
		}
	},
	'/user/api/user/getCommonMaster/{commonTypeId}': {
		get: {
			summary: 'Get Common Types from Collection',
			description: 'Get Common Types',
			tags: ['User'],
			parameters: [
				{
					name: 'commonTypeId',
					in: 'path',
					description: 'ID of common types.',
					required: true,
					type: 'string'
				}
			],
			responses: {
				200: { description: 'successful' },
				206: { description: 'failure' },
				400: { description: 'Invalid ID supplied' },
				404: { description: 'User not found' }
			}
		}
	},
	'/user/api/user/getRoles': {
		get: {
			summary: 'Get all roles',
			description: 'To get all roles',
			tags: ['User'],
			responses: {
				200: { description: 'successful' },
				206: { description: 'failure' },
				400: { description: 'Invalid ID supplied' },
				404: { description: 'User not found' }
			}
		}
	},
	'/user/api/user/getMgrName': {
		get: {
			summary: 'Get Mgr names and Ids',
			description: 'To get all Managers from User collections on basis of fn search param',
			tags: ['User'],
			parameters: [
				{
					name: 'name',
					in: 'query',
					description: 'First name in user collection',
					required: true,
					type: 'string'
				}
			],
			responses: {
				200: { description: 'successful' },
				206: { description: 'failure' },
				400: { description: 'Invalid ID supplied' },
				404: { description: 'User not found' }
			}
		}
	},
	'/user/api/user/getAccessDropdown': {
		post: {
			summary: 'Get Access data from access collection',
			description:
				'To get all the access combinations. Need to send array values portfolioName,marketName,jvName and practiceName',
			tags: ['User'],
			parameters: [
				{
					name: 'user',
					in: 'body',
					description: 'Get access combinations ',
					required: true,
					schema: {
						required: ['all', 'portfolioName'],
						properties: {
							all: {
								type: 'boolean'
							},
							currentField: {
								type: 'string'
							},
							portfolioName: {
								type: 'array',
								items: {
									type: 'string'
								}
							}
						}
					}
				}
			],
			responses: {
				200: { description: 'successful' },
				206: { description: 'failure' },
				400: { description: 'Invalid ID supplied' },
				404: { description: 'User not found' }
			}
		}
	}
};
