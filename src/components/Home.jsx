import styles from './Home.module.css'

import homeBackground from '../assets/home/desktop/bg-pattern-hero-home.svg'

import leafBackground from '../assets/shared/desktop/bg-pattern-leaf.svg'

import phoneImage from '../assets/home/desktop/image-hero-phone.png'

import webBackground from '../assets/home/desktop/image-web-design-large.jpg'

import appBackground from '../assets/home/desktop/image-app-design.jpg'

import graphicBackground from '../assets/home/desktop/image-graphic-design.jpg'

import rightArrow from '../assets/shared/desktop/icon-right-arrow.svg'

import qualityPassionate from '../assets/home/desktop/illustration-passionate.svg'

import qualityResourceful from '../assets/home/desktop/illustration-resourceful.svg'

import qualityFriendly from '../assets/home/desktop/illustration-friendly.svg'

import qualityBackground from '../assets/home/desktop/bg-pattern-hero-home.svg'

const Home = () => {
  return (
    <>
    <img className={styles.leafTop} src={leafBackground} alt="" />
    <img className={styles.leafBottom} src={leafBackground} alt="" />
    <div style={{backgroundImage: `url(${homeBackground})`}} className={styles.home}>
      <div className={styles.homeInfo}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <button>Learn More</button>
      </div>
        <img className={styles.homeImage} src={phoneImage} alt="Phone" />
    </div>

    <div className={styles.homeServices}>
      <div style={{backgroundImage: `url(${webBackground})`}} className={styles.homeServicesWeb}>
        <div>
          <h1>Web Design</h1>
          <p>View Projects<img alt=">" src={rightArrow} /></p>  
        </div>
      </div>
      <div style={{backgroundImage: `url(${appBackground})`}} className={styles.homeServicesApp}>
        <div>
          <h1>App Design</h1>
          <p>View Projects<img alt=">" src={rightArrow} /></p>  
        </div>
      </div>
      <div style={{backgroundImage: `url(${graphicBackground})`}} className={styles.homeServicesGraphic}>
        <div>
          <h1>Graphic Design</h1>
          <p>View Projects<img alt=">" src={rightArrow} /></p>  
        </div>
      </div>
    </div>

    <div className={styles.homeQualities}>

      <div className={styles.homeQualitiesContent}>
        <div className={styles.quality}>
          <img src={qualityPassionate} alt="" />
          <img className={`${styles.qualityBackground} ${styles.qualityBackgroundPassionate}`} src={qualityBackground} alt="" />
        </div>
        <h3>Passionate</h3>
        <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
      </div>
      <div className={styles.homeQualitiesContent}>
        <div className={styles.quality}>
          <img src={qualityResourceful} alt="" />
          <img className={`${styles.qualityBackground} ${styles.qualityBackgroundResourceful}`} src={qualityBackground} alt="" />
        </div>
        <h3>Resourceful</h3>
        <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
      </div>
      <div className={styles.homeQualitiesContent}>
        <div className={styles.quality}>
          <img src={qualityFriendly} alt="" />
          <img className={`${styles.qualityBackground} ${styles.qualityBackgroundFriendly}`} src={qualityBackground} alt="" />
        </div>
        <h3>Friendly</h3>
        <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
      </div>

    </div>

    </>
  )
}

export default Home