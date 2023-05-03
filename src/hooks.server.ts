import { PUBLIC_BACKEND_SERVER_URL } from '$env/static/public'
import { redirect, type Handle } from "@sveltejs/kit"
import axios from 'axios'

export const handle: Handle = async ({ event, resolve }) => {
  console.log(PUBLIC_BACKEND_SERVER_URL)
  if (event.url.pathname.startsWith('/resturant')) {
    const resturantToken = event.cookies.get('token')

    if (!event.url.pathname.startsWith('/resturant/auth') && !resturantToken) {
      throw redirect(303, '/resturant/auth/login')
    }

    if (resturantToken) {
      const response = await axios({
        url: `${PUBLIC_BACKEND_SERVER_URL}resturant/validate`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${resturantToken}`
        }
      })

      if (response.data.success) {
        event.cookies.set('resturant', JSON.stringify(response.data.data.resturant))
      }
    }


  }

  if (event.url.pathname.startsWith('/user')) {
    const userToken = event.cookies.get('user_token')
  }


  return resolve(event)
}