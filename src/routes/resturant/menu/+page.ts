import type { PageLoad } from './$types'
// import { handleRequest } from '$lib/utils'
import axios from 'axios'

export const load: PageLoad = async () => {
	const response = await axios({
		url: 'https://yourmeal.up.railway.app/resturant/644fbc68113d8826ecb9e740/menu',
		method: 'get'
	})

	console.log(response)

	return {
		...response.data
	}
}
