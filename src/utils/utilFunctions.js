export const getUniqueArrayByProp = (arr, prop) => {
	const set = new Set();
	return arr.filter(o => !set.has(o[prop]) && set.add(o[prop]));
};

export const getUtcDate = () => {
	return new Date(new Date().toUTCString());
};

export const searchUserObject = (object, keys) => {
	return keys.reduce((obj, key) => {
		if (object && Object.prototype.hasOwnProperty.call(object, key)) {
			if (key === 'fn' || key === 'ln') {
				obj[key] = { $regex: new RegExp(object[key], 'i') };
			} else if (key === 'isActive') {
				// Value of isActive is 2, when status is "All".
				if (object['isActive'] == 0 || object['isActive'] == 1) {
					obj[key] = object[key];
				}
			} else {
				obj[key] = object[key];
			}
		}
		return obj;
	}, {});
};

export const removeDuplicateAccess = accessArray => {
	let accessList = accessArray.reduce((unique, o) => {
		if (!unique.some(obj => obj.accessRef === o.accessRef)) {
			unique.push(o);
		}
		return unique;
	}, []);

	return accessList;
};
