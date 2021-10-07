import logoLight from '../assets/shared/desktop/logo-dark.png'
import logoDark from '../assets/shared/desktop/logo-light.png'
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <div className={styles.head}>
      <img alt="DESIGNO" src={props.color === 'dark' ? logoDark : logoLight} />
      <ul className={styles.links}>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header