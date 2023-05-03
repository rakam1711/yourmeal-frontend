import { PUBLIC_BACKEND_SERVER_URL } from '$env/static/public'
import { redirect, type Handle } from "@sveltejs/kit"
import axios from 'axios'

export const handle: Handle = async ({ event, resolve }) => {
  // * Protect Resturant Routes
  if (event.url.pathname.startsWith('/resturant')) {
    // * Getting token from cookies
    const resturantToken = event.cookies.get('token')

    // ? Check if someone is trying to access without a token
    if (!event.url.pathname.startsWith('/resturant/auth') && !resturantToken) {
      throw redirect(303, '/resturant/auth/login')
    }

    // * Validate the token and get associated data
    if (resturantToken) {
      const response = await axios({
        url: `${PUBLIC_BACKEND_SERVER_URL}resturant/validate`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${resturantToken}`
        }
      })

      // * Storing the data in a cookie which expires with the session
      if (response.data.success) {
        event.cookies.set('resturant', JSON.stringify(response.data.data.resturant))
      }
    }
  }

  // * Protect User Routes
  if (event.url.pathname.startsWith('/user')) {
    // * Getting token from cookies
    const userToken = event.cookies.get('token')

    // ? Check if someone is trying to access without a token
    if (!event.url.pathname.startsWith('/user/auth') && !userToken) {
      throw redirect(303, '/user/auth/login')
    }

  }

  return resolve(event)
}