import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {

  const navigate = useNavigate();

  const user = {
    name: 'Uriel Pineda',
    email: 'rh_ng3@hotmail.com',
    password: '12345'
  }

  const { login } = useContext(AuthContext)

  const { email, password, onInputChange } = useForm({ email: '', password: '' })

  const handleLogin = (e) => {

    e.preventDefault()

    if (email !== user.email || password !== user.password) return;

    login(user.name, user.email, user.password)


    navigate('/marvel', {
      replace: true,
    })
  };

  return (
    <div className="container mt5">
      <h1>Login</h1>
      <hr />

      <form onSubmit={handleLogin} className="col-6">
        <input
          className="form-control mt-4"
          type="text"
          name="email"
          id="email"
          onChange={onInputChange}
          placeholder="Email"
          value={email}
        />
        <input
          className="form-control mt-2"
          type="password"
          name="password"
          id="password"
          onChange={onInputChange}
          placeholder="Password"
          value={password}
        />
        <button className="btn btn-primary mt-2">
          Login
        </button>
      </form>

    </div>
  )
}
