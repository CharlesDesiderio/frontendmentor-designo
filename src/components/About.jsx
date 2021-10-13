import styles from './About.module.css'

import aboutImage from '../assets/about/desktop/image-about-hero.jpg'

import talentImage from '../assets/about/desktop/image-world-class-talent.jpg'

import aboutBackground from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg'

import twoCirclesBackground from '../assets/shared/desktop/bg-pattern-two-circles.svg'

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
    <div className={styles.aboutTalent}>
      <img src={talentImage} alt="World-class Talent" />
      <div style={{ backgroundImage: `url(${twoCirclesBackground})` }} className={styles.aboutTalentInfo}>
      <h2>World-class talent</h2>
      <p>
      We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
      </p>
      <p>
      Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
      </p>
      </div>
      </div>
    </>
  )
}

export default About