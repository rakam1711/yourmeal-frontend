import { BACKEND_SERVER_URL } from '$env/static/private'
import type { Cookies } from '@sveltejs/kit'
import axios, { type AxiosResponse } from 'axios'

interface HandleRequestOptions {
	path: string
	data?: any
	cookies?: Cookies
}

export const handleRequest = ({
	path,
	data,
	cookies
}: HandleRequestOptions): Promise<AxiosResponse> => {
	const token = cookies.get('token')

	console.log(BACKEND_SERVER_URL + path)

	return axios({
		url: BACKEND_SERVER_URL + path,
		method: 'post',
		headers: {
			Authorization: `Bearer ${token}`
		},
		data
	})
}
