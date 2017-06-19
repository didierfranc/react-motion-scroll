export const isEqual = (a, b) => {
  try {
    return JSON.stringify(a) === JSON.stringify(b)
  } catch (e) {
    console.warn(e)
    return false
  }
}
