import type { Actions } from './$types'
import { env } from '$env/dynamic/private'
import { error } from '@sveltejs/kit'
import axios from 'axios'

export const actions: Actions = {
  default: async ({request, cookies}) => {

    const data = Object.fromEntries([...(await request.formData())])
    const { firstname, lastname, email, password, confirmPassword, phone } = data

    if(password !== confirmPassword) {
      throw error(400, 'password and confirm password do not match')
    }

    try {
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

      console.log(res.data)

      if(res && res.data && res.data.errors.length < 1) {
        cookies.set('token', res.data.data.token, {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60),
          secure: true,
          sameSite: true,
          httpOnly: true
        })
      }

      return { 
        ...res.data
      }
    } catch (error) {
      console.error(error)
    }
  }
}