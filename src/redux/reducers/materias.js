import { RESET_MATERIAS, UPDATE_MATERIAS } from '../actions/materias'

const defaultMaterias = []

const materias = (state = defaultMaterias, action) => {

  const { type, payload } = action

  switch (type) {
    case UPDATE_MATERIAS:
      if (state.length === payload.length || state.length === 0) {
        return payload
      }

      if (state.length !== payload.length) {
        return [...state, ...payload]
      }

    case RESET_MATERIAS:
      return defaultMaterias
    default: return state
  }
}

export default materias