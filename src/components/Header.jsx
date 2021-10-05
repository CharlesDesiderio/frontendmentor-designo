import logo from '../assets/shared/desktop/logo-dark.png'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head}>
      <img alt="DESIGNO" src={logo} />
      <ul className={styles.links}>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header