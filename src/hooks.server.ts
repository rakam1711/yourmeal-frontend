import type { Handle } from '@sveltejs/kit'

export const handle: Handle = ({ event, resolve }) => {
	const token = event.cookies.get('token')
	if (!token) {
		return resolve(event)
	}

	console.log(event.request)
	event.request.headers.set('Authorization', `Bearer ${token}`)
	// event.setHeaders({ Authorization: `Bearer ${token}` })
	// event.headers.Authorization = `Bearer ${token}`

	return resolve(event)
}
