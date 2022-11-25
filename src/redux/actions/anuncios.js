export const UPDATE_ANUNCIOS = '@anuncio/updateAnuncios'
export const updateAnunciosAction = (anunciosList) => {
  return {
    type: UPDATE_ANUNCIOS,
    payload: anunciosList
  }
}

export const RESET_ANUNCIOS = '@anuncio/resetAnuncios'
export const resetAnunciosAction = () => {
  return {
    type: RESET_ANUNCIOS,
    payload: {}
  }
}

export const DEL_ANUNCIO = '@anuncio/delAnuncio'
export const delAnuncioAction = (id) => {
  return {
    type: DEL_ANUNCIO,
    payload: {id}
  }
}