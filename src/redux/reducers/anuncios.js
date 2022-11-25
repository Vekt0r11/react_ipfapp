import { UPDATE_ANUNCIOS, RESET_ANUNCIOS, DEL_ANUNCIO } from '../actions/anuncios'

const defaultAnuncios = []

const anuncios = (state = defaultAnuncios, action) => {

  const { type, payload } = action

  switch (type) {

    case UPDATE_ANUNCIOS:

      if (state.length === payload.length || state.length === 0) {
        return payload
      }

      if (state.length !== payload.length) {
        return [...state, ...payload]
      }

    case DEL_ANUNCIO:

      Array.prototype.spliced = function () {
        Array.prototype.splice.apply(this, arguments);
        return this;
      }
      const index = state.findIndex((anuncio) => anuncio._id === payload.id)
      const updatedList = state.spliced(index, 1)

      return updatedList

    case RESET_ANUNCIOS:
      return defaultAnuncios

    default: return state
  }
}

export default anuncios