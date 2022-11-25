const reformatDate = (fecha) => {
  return fecha.slice(0, 10).split('-').reverse().join('/')
}
export default reformatDate