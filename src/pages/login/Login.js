import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

import './Login.css'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, isPending, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          autoComplete='currentEmail'
        />
      </label>
      <label>
        <span>password:</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          autoComplete='currentPassword'
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
