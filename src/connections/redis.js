import Redis from 'ioredis';

// Constants

let redis;
// const PORT = require('net').isIP('0.0.0.0') ? `:${'6379'}` : '';

const connect = () =>
	new Promise((resolve, reject) => {
		const r = new Redis();

		r.on('connect', function () {
			console.log('✅ Redis: successfully connected!');
			redis = r;
			resolve();
		});

		r.on('error', err => {
			console.error('❌ Redis: error', err);
			reject(err);
		});
	});

export { connect, redis };
