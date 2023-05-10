import { useContext } from "react"
import { AuthContext } from "./App"

function LoginBox() {
  const auth = useContext(AuthContext)

  if (!!auth) {
    return (
      <div>
        <p>Auth username = {auth.username}</p>
        <p>Auth fullname = {auth.fullname}</p>
        <p><button>Log out</button></p>
      </div>
    )
  }
  return (
    <form>
      <p><input type='text' placeholder="username" /></p>
      <p><input type='password' placeholder="password" /></p>
      <p><button type="submit">Log in</button></p>
    </form>
  )
}

export default LoginBox