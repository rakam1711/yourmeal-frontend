import type { Actions } from './$types'
import type { ServerLoad } from '@sveltejs/kit'

import { PUBLIC_BACKEND_SERVER_URL } from '$env/static/public'
import { handleRequest } from '$lib/utils'
import axios from 'axios'


export const load: ServerLoad = async ({ cookies }) => {
	const resturant = JSON.parse(cookies.get('resturant') ?? '{}')

	const response = await axios({
		url: `${PUBLIC_BACKEND_SERVER_URL}${resturant._id}/menu`,
		method: 'get'
	})

	return {
		...response.data
	}
}

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = Object.fromEntries([...(await request.formData())])

		const res = await handleRequest({ path: 'resturant/menu/add', data, cookies })

		return {
			...res.data
		}
	}
}
