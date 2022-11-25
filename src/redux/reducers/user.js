import defaultUser from '../defaults/defaultUser'
import { UPDATE_USER, RESET_USER } from '../actions/user'

const user = (state = defaultUser, action) => {

  const {type, payload} = action

  switch (type) {
    case UPDATE_USER:
        return {
          ...state,
          ...payload
        }
    case RESET_USER:
      return defaultUser
    default: return state
  }
}

export default user