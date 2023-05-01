import type { Actions } from './$types'
import { handleRequest } from '$lib/utils'

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries([...(await request.formData())])

		const res = await handleRequest({ path: 'resturant/menu/add', data, cookies })
		console.log(res.data.data)

		return {
			...res.data
		}
	}
}
