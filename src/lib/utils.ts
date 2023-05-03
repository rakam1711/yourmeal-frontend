import { PUBLIC_BACKEND_SERVER_URL } from '$env/static/public'
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
	const token: string | undefined = cookies?.get('token')

	return axios({
		url: PUBLIC_BACKEND_SERVER_URL + path,
		method: 'post',
		headers: {
			Authorization: `Bearer ${token}`
		},
		data
	})
}
