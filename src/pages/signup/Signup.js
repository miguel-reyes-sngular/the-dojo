import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import './Signup.css'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, isPending, error } = useSignup()

  const handleFileChange = (e) => {
    setThumbnail(null)

    let selected = e.target.files[0]

    console.log(selected);

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (selected.size > 100000) { //*100k bytes
      setThumbnailError('Image file size must be less than 100kb')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbail updated');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail)
    //! the order of the arguments must be the same as in the file 'useSignup.js' on function 'signup'
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
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
          onChange={handleFileChange}
          type="file"
          required
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
