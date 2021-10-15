import styles from './Footer.module.css'
import Header from './Header'

import iconFB from '../assets/shared/desktop/icon-facebook.svg'
import iconYT from '../assets/shared/desktop/icon-youtube.svg'
import iconTW from '../assets/shared/desktop/icon-twitter.svg'
import iconPI from '../assets/shared/desktop/icon-pinterest.svg'
import iconIG from '../assets/shared/desktop/icon-instagram.svg'

import { useLocation } from 'react-router'

const Footer = () => {

  const path = useLocation().pathname

  return (
    <div style={{ paddingTop: path === '/contact' ? '70px' : '' }} className={styles.footer}>
      <div className={styles.footerContainer}>
        <Header color='dark' />
      </div>
      <div className={styles.contact}>
        <div className={styles.contactPhysical}>
          <p>
            <strong>Designo Central Office</strong><br />
            3886 Wellington Street<br />
            Toronto, Ontario M9C 3J5<br />
          </p>
          <p>
            <strong>Contact Us (Central Office)<br />
            P : +1 253-863-8967<br />
            M : contact@designo.co</strong>
          </p>
        </div>
        <div className={styles.contactSocial}>
          <img alt="Facebook" src={iconFB} />
          <img alt="YouTube" src={iconYT} />
          <img alt="Twitter" src={iconTW} />
          <img alt="Pinterest" src={iconPI} />
          <img alt="Instagram" src={iconIG} />


        </div>
      </div>
    </div>
  )
}

export default Footer