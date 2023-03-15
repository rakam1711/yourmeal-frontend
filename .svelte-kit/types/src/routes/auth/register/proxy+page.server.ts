// @ts-nocheck
/** */

export const actions = {
  default:/** @param {import('./$types').RequestEvent} event */  async ({cookies, request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries([...formData]) 
    console.log(data)
  }
};