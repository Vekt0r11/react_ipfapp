const loadOtp = () => {
  const otps = []
  for (let i = 0; i < 11; i++) {
    otps.push(<option key={i} value={i}>{i}</option>)
  }
  return otps
}
export default loadOtp