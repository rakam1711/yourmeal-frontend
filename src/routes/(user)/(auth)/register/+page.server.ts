import type { Actions } from './$types'
import { BACKEND_URL } from '$lib/server/constants'
import { error } from '@sveltejs/kit'
import axios from 'axios'

export const actions: Actions = {
  default: async ({cookies, request}) => {
    const data = Object.fromEntries([...(await request.formData())])
    const { firstname, lastname, email, password, confirmPassword, phone } = data

    if(password !== confirmPassword) {
      throw error(400, 'password and confirm password do not match')
    }

    try {
      const res = await axios({
        url: `${BACKEND_URL}user/register`,
        method: 'post',
        data: {
          firstname, 
          lastname, 
          email, 
          password, 
          confirmPassword, 
          phone 
        }
      }) 

      console.log(res.data)
    } catch (error) {
      console.error(error)
    }

    
    return {

    }
  }
}