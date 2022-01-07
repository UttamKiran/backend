export const uniqueString = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
};

export const customObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) => {
	return s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
};
