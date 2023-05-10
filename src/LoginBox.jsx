import { useContext } from "react"
import { AuthContext } from "./App"

const fakeUser = { username: 'nine789', fullname: 'เต้า หมิงซื่อ'}

function LoginBox() {
  const { auth, setAuth } = useContext(AuthContext)

  function loginSubmit(event) {
    event.preventDefault()
    setAuth(fakeUser)
  }
  function logoutClick() {
    setAuth(null)
  }

  if (!!auth) {
    return (
      <div>
        <p>Auth username = {auth.username}</p>
        <p>Auth fullname = {auth.fullname}</p>
        <p><button onClick={logoutClick}>Log out</button></p>
      </div>
    )
  }
  return (
    <form onSubmit={loginSubmit}>
      <p><input type='text' placeholder="username" /></p>
      <p><input type='password' placeholder="password" /></p>
      <p><button type="submit">Log in</button></p>
    </form>
  )
}

export default LoginBox