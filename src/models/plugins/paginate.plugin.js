/* eslint-disable no-param-reassign */

export const paginate = schema => {
	schema.statics.paginate = async function (filter, options, projection) {
		let sort = '';
		if (options.sortBy) {
			const sortingCriteria = [];
			options.sortBy.split(',').forEach(sortOption => {
				const [key, order] = sortOption.split(':');
				sortingCriteria.push((order === 'desc' ? '-' : '') + key);
			});
			sort = sortingCriteria.join(' ');
		} else {
			sort = { crtdOn: -1 };
		}

		const limit =
			options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 15;
		const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
		const skip = (page - 1) * limit;

		let docsPromise = this.find(filter, projection)
			.sort(sort)
			.skip(skip)
			.limit(limit + 1);

		docsPromise = docsPromise.exec();

		return Promise.all([docsPromise]).then(values => {
			let [results] = values;
			let isPreviousAvailable;
			let isNextAvailable = false;
			if (results.length > limit) {
				// Removing one extra element searched
				results = results.slice(0, limit);
				isNextAvailable = true;
			}
			page > 1 ? (isPreviousAvailable = true) : (isPreviousAvailable = false);

			const result = {
				results,
				page,
				limit,
				isPreviousAvailable,
				isNextAvailable
			};
			return Promise.resolve(result);
		});
	};
};
