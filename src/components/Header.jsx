import logo from '../assets/shared/desktop/logo-dark.png'
import logoLight from '../assets/shared/desktop/logo-light.png'
import styles from './Header.module.css'

import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={styles.head}>
      {/* This line bugs me, but it's because the logo is the light version FOR the dark theme. */}
      <img alt="DESIGNO" src={props.color === 'dark' ? logoLight : logo} />
      <ul className={styles.links}>
        <li><Link to="/about">Our Company</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header