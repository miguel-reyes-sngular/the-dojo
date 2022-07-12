import { useState } from 'react'
import './Signup.css'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  return (
    <form className='auth-form'>
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
        />
      </label>
      <label>
        <span>password:</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          type="text"
          required
        />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input
          type="file"
          required
        />
      </label>
      <button className="btn">Sign up</button>
    </form>
  )
}
