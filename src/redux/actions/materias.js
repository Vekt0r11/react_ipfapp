export const UPDATE_MATERIAS = '@materias/updateMaterias'
export const updateMateriasAction = (materiasList) => {
  return {
    type: UPDATE_MATERIAS,
    payload: materiasList
  }
}

export const RESET_MATERIAS = '@materias/resetMaterias'
export const resetMateriasAction = () => {
  return {
    type: RESET_MATERIAS,
    payload: {}
  }
}