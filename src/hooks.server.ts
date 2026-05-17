import type { Handle } from '@sveltejs/kit';

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER ?? '';
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD ?? '';

export const handle: Handle = async ({ event, resolve }) => {
	if (!BASIC_AUTH_USER || !BASIC_AUTH_PASSWORD) {
		return resolve(event);
	}

	const authorization = event.request.headers.get('authorization');

	if (authorization) {
		const [scheme, encoded] = authorization.split(' ');
		if (scheme === 'Basic' && encoded) {
			const decoded = atob(encoded);
			const [user, ...passwordParts] = decoded.split(':');
			const password = passwordParts.join(':');
			if (user === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD) {
				return resolve(event);
			}
		}
	}

	return new Response('Unauthorized', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="Portfolio", charset="UTF-8"'
		}
	});
};
