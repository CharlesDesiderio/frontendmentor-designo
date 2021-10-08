import styles from './Home.module.css'
import homeBackground from '../assets/home/desktop/bg-pattern-hero-home.svg'
import phoneImage from '../assets/home/desktop/image-hero-phone.png'

const Home = () => {
  return (
    <div style={{backgroundImage: `url(${homeBackground})`}} className={styles.home}>
      <div className={styles.homeInfo}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <button>Learn More</button>
      </div>
        <img className={styles.homeImage} src={phoneImage} alt="Phone" />
    </div>
  )
}

export default Home