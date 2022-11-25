export const UPDATE_USER = '@user/updateUser'
export const updateUserAction = (userInfo) => {

  return {
    type: UPDATE_USER,
    payload: userInfo
  }
}

export const RESET_USER = '@user/resetUser'
export const resetUserAction = () => {

  return {
    type: RESET_USER,
    payload: {}
  }
}