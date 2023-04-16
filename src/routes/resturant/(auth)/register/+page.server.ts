import type { Actions } from './$types'
import {env} from '$env/dynamic/private'
import axios from 'axios'

export const actions:Actions = {
  default: async ({request, cookies}) => {
    const contacts = {
      emails: [''],
      phones: ['']
    }

const tags = ['']

const data = Object.fromEntries([...(await request.formData())])
const {name, email, password, description, image, address} = data

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

console.log(res)
}
}