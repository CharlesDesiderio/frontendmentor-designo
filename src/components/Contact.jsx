import styles from './Contact.module.css'

import canadaImage from '../assets/shared/desktop/illustration-canada.svg'

import ausImage from '../assets/shared/desktop/illustration-australia.svg'

import ukImage from '../assets/shared/desktop/illustration-united-kingdom.svg'

import cityBackground from '../assets/home/desktop/bg-pattern-hero-home.svg'

import contactBackground from '../assets/contact/desktop/bg-pattern-hero-desktop.svg'

const Contact = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${contactBackground})` }} className={styles.contactCard}>
        <div>
          <h1>Contact Us</h1>
          <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
        </div>
        <div>
          <form className={styles.contactForm}>
            <input type="text" name="name" placeholder="Name" />  
            <input type="text" name="email" placeholder="Email Address" />
            <input type="text" name="phone" placeholder="Phone" />
            <input type="textarea" name="message" placeholder="Your Message" />
            <button type="submit">Submit</button>
          </form>
        </div>
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