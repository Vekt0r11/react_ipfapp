export const getUserInfo = async (token) => {
  // const id = '6357f74d2a7f4258bf33d5e3'

  const URL = `http://localhost:4000/usuario/${token}`

  const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const userInfo = await fetch(URL, config)
    .then(userInfo => userInfo.json())
  return userInfo
}