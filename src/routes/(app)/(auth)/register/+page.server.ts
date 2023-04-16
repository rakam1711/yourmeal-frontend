import type { Actions } from './$types'
import { env } from '$env/dynamic/private'
import { error, redirect } from '@sveltejs/kit'
import axios from 'axios'

export const actions: Actions = {
  default: async ({request, cookies}) => {

    const data = Object.fromEntries([...(await request.formData())])
    const { firstname, lastname, email, password, confirmPassword, phone } = data

    if(password !== confirmPassword) {
      throw error(400, 'password and confirm password do not match')
    }

    const res = await axios({
      url: `${env.BACKEND_SERVER_URL}user/register`,
      method: 'post',
      data: {
        firstname,
        lastname,
        email,
        password,
        phone
      }
    })

    if(res && res.data && res.data.errors.length < 1) {
      cookies.set('token', res.data.data.token, {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60),
        secure: true,
        sameSite: true,
        httpOnly: true
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