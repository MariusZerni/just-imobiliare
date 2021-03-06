function setToken(token) {
  localStorage.setItem('token', token)
}

function isLoggedIn() {
  const isLoggedIn = !!localStorage.getItem('token')
  return isLoggedIn
}

function logout() {
  return localStorage.removeItem('token')
}

function getToken() {
  return localStorage.getItem('token')
}
function getUserId() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  return JSON.parse(atob(parts[1])).sub
}

export default {
  setToken,
  isLoggedIn,
  logout,
  getToken,
  getUserId
}
