import type { Actions } from './$types'
import { PUBLIC_BACKEND_SERVER_URL } from '$env/static/public'
import { redirect } from '@sveltejs/kit'
import axios from 'axios'

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries([...(await request.formData())])
		const { email, password } = data

		const res = await axios({
			url: `${PUBLIC_BACKEND_SERVER_URL}user/login`,
			method: 'post',
			data: {
				email,
				password
			}
		})

		if (res && res.data && res.data.errors.length < 1) {
			cookies.set('user_token', res.data.data.token, {
				secure: true,
				sameSite: true,
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 3
			})
			throw redirect(304, 'home')
		} else if (res && res.data && res.data.errors.length > 0) {
			return {
				...res.data
			}
		}
	}
}
