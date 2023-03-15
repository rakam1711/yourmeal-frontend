// @ts-nocheck
import axios from 'axios'
import { SERVER_URL } from '$lib/server/secrets'
import { redirect } from '@sveltejs/kit'

/** */
export const actions = {
  default:/** @param {import('./$types').RequestEvent} event */  async ({cookies, request}) => {
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
        maxAge: 60 * 30,
        sameSite: true
      })

      throw redirect(303, '/')
    } else {
      return {
        data: res.data
      }
    }
  }
};