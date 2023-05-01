import type { Actions } from './$types'
import { env } from '$env/dynamic/private'
import { redirect } from '@sveltejs/kit'
import axios from 'axios'

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries([...(await request.formData())])
		const { email, password } = data

		const res = await axios({
			url: `${env.BACKEND_SERVER_URL}resturant/login`,
			method: 'post',
			data: {
				email,
				password
			}
		})

		// ! Getting token with wrong password
		if (res && res.data && res.data.errors.length < 1) {
			cookies.set('token', res.data.data.token, {
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

		return {
			...res.data
		}
	}
}
