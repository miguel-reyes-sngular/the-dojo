import { Link } from 'react-router-dom'

import './Navbar.css'
import temple from '../assets/temple.svg'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li className="logo">
          <img src={temple} alt="Dojo logo" />
          <span>The Dojo</span>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li><button className='btn'>Logout</button></li>
      </ul>
    </nav>
  )
}
