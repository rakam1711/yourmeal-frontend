import axios from 'axios'
import { SERVER_URL } from '$lib/server/secrets'

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({cookies, request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries([...formData]) 
  
    const res = await axios({
      url: `${SERVER_URL}/auth/login`,
      method: 'post',
      data: {
        username: data.email,
        password: data.password
      }
    })

    if(res.data.success) {
      cookies.set('token', res.data.token, {
        maxAge: 60 * 60 * 24
      })
    } else {
      return {
        data: res.data
      }
    }
  }
};