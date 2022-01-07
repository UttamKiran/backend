import { Router } from 'express';

import { UserController } from '../controllers';
import { UserValidator, utilsValidator } from '../validators';

const router = Router();

router.get(
	'/getAccessMaster',
	utilsValidator.validateRequest(UserValidator.getAccessMaster),
	UserController.getAccessMaster
);
router.post(
	'/getAccessDropdown',
	utilsValidator.validateRequest(UserValidator.getAccessDropdown),
	UserController.getAccessDropdown
);
router.get('/getRoles', UserController.getRoles);
router.get(
	'/getMgrName',
	utilsValidator.validateRequest(UserValidator.getMgrName),
	UserController.getMgrName
);
router.get(
	'/getCommonMaster/:commonTypeId',
	utilsValidator.validateRequest(UserValidator.getCommonMaster),
	UserController.getCommonMaster
);
router.get('/getCommonTypes', UserController.getCommonTypes);
router.get(
	'/',
	utilsValidator.validateRequest(UserValidator.getUserList),
	UserController.getUsersList
);
router.patch(
	'/:id',
	utilsValidator.validateRequest(UserValidator.updateUser),
	UserController.updateUserById
);
router.post(
	'/',
	utilsValidator.validateRequest(UserValidator.createUser),
	UserController.createUser
);
router.get(
	'/:id',
	utilsValidator.validateRequest(UserValidator.getUserById),
	UserController.getUsersById
);

export default router;
