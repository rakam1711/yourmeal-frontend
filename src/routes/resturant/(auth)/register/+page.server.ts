import type { Actions } from './$types'
import { env } from '$env/dynamic/private'
import axios from 'axios'
import { redirect } from '@sveltejs/kit'

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const contacts = {
      emails: [''],
      phones: ['']
    }

    const tags = ['']

    const data = Object.fromEntries([...(await request.formData())])
    const { name, email, password, description, image, address } = data

    const res = await axios({
      url: `${env.BACKEND_SERVER_URL}resturant/add`,
      method: 'post',
      data: {
        name,
        email,
        password,
        contacts,
        description,
        image,
        tags,
        address
      }
    })

    if (res && res.data && res.data.errors.length < 1) {
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