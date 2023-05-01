import type { Actions } from './$types'
import { env } from '$env/dynamic/private'
import axios from 'axios'

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries([...(await request.formData())])

		const res = await axios({
			url: `${env.BACKEND_SERVER_URL}resturant/menu/add`,
			method: 'post',
			data
		})

		console.log(res)

		return {
			...res.data
		}
	}
}
