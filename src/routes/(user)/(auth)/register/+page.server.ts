import type { Actions } from './$types'
import { error } from '@sveltejs/kit'

export const actions: Actions = {
  default: async ({cookies, request}) => {
    const data = await request.formData()
    const firstName = data.get('firstName')
    const lastName = data.get('lastName')
    const email = data.get('email')
    const password = data.get('firstNpasswordme')
    const confirmPassword = data.get('confirmPassword')
    const phone = data.get('phone')

    if(password !== confirmPassword) {
      throw error(400, 'password and confirm password do not match')
    }
    
    return {

    }
  }
}