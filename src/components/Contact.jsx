import styles from './Contact.module.css'

import canadaImage from '../assets/shared/desktop/illustration-canada.svg'

import ausImage from '../assets/shared/desktop/illustration-australia.svg'

import ukImage from '../assets/shared/desktop/illustration-united-kingdom.svg'

import cityBackground from '../assets/home/desktop/bg-pattern-hero-home.svg'

const Contact = () => {
  return (
    <>
      <div className={styles.contactCard}>
        
      </div>

      <div className={styles.contactCities}>
        <div className={styles.contactCity}>
          <div className={styles.contactCityImage}>
          <img src={canadaImage} alt="" />
          <img className={styles.canadaBackground} src={cityBackground} alt="" />
          </div>

          <p>Canada</p>
          <button>See Location</button>
        </div>
        <div className={styles.contactCity}>
          <div className={styles.contactCityImage}>
          <img src={ausImage} alt="" />
          <img className={styles.ausBackground} src={cityBackground} alt="" />
          </div>

          <p>Australia</p>
          <button>See Location</button>
        </div>
        <div className={styles.contactCity}>
          <div className={styles.contactCityImage}>
          <img src={ukImage} alt="" />
          <img className={styles.ukBackground} src={cityBackground} alt="" />
          </div>

          <p>United Kingdom</p>
          <button>See Location</button>
        </div>
      </div>
    </>
  )
}

export default Contact