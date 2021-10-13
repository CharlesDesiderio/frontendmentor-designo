import styles from './About.module.css'

import aboutImage from '../assets/about/desktop/image-about-hero.jpg'

import aboutBackground from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg'

const About = () => {
  return (
    <>
    <div className={styles.aboutTitle}>
      <div style={{ backgroundImage: `url(${aboutBackground})` }} className={styles.aboutTitleDetails}>
        <h1>About Us</h1>
        <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
      </div>
      <img src={aboutImage} alt="About Us" />
    </div>

    
    </>
  )
}

export default About