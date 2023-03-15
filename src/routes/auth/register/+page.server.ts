/** @type {import('./$types').Actions} */

export const actions = {
  default: async ({cookies, request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries([...formData]) 
    console.log(data)
  }
};