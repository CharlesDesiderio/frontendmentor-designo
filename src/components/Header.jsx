import logo from '../assets/shared/desktop/logo-dark.png'
import logoLight from '../assets/shared/desktop/logo-light.png'
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <div className={styles.head}>
      {/* This line bugs me, but it's because the logo is the light version FOR the dark theme. */}
      <img alt="DESIGNO" src={props.color === 'dark' ? logoLight : logo} />
      <ul className={styles.links}>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header