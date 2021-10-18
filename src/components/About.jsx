import styles from './About.module.css';

import leafBackground from '../assets/shared/desktop/bg-pattern-leaf.svg'

import aboutImage from '../assets/about/desktop/image-about-hero.jpg';

import talentImage from '../assets/about/desktop/image-world-class-talent.jpg';

import aboutBackground from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg';

import twoCirclesBackground from '../assets/shared/desktop/bg-pattern-two-circles.svg';

import canadaImage from '../assets/shared/desktop/illustration-canada.svg'

import ausImage from '../assets/shared/desktop/illustration-australia.svg'

import ukImage from '../assets/shared/desktop/illustration-united-kingdom.svg'

import cityBackground from '../assets/home/desktop/bg-pattern-hero-home.svg'

import aboutRealDealImage from '../assets/about/desktop/image-real-deal.jpg'

const About = () => {
  return (
    <>
    <img className={styles.leafTop} src={leafBackground} alt="" />
    <img className={styles.leafBottom} src={leafBackground} alt="" />
      <div className={styles.aboutTitle}>
        <div
          style={{ backgroundImage: `url(${aboutBackground})` }}
          className={styles.aboutTitleDetails}
        >
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <img src={aboutImage} alt='About Us' />
      </div>
      <div className={styles.aboutTalent}>
        <img src={talentImage} alt='World-class Talent' />
        <div
          style={{ backgroundImage: `url(${twoCirclesBackground})` }}
          className={styles.aboutTalentInfo}
        >
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <div className={styles.aboutCities}>
        <div className={styles.aboutCity}>
          <div className={styles.aboutCityImage}>
          <img src={canadaImage} alt="" />
          <img className={styles.canadaBackground} src={cityBackground} alt="" />
          </div>

          <p>Canada</p>
          <button>See Location</button>
        </div>
        <div className={styles.aboutCity}>
          <div className={styles.aboutCityImage}>
          <img src={ausImage} alt="" />
          <img className={styles.ausBackground} src={cityBackground} alt="" />
          </div>

          <p>Australia</p>
          <button>See Location</button>
        </div>
        <div className={styles.aboutCity}>
          <div className={styles.aboutCityImage}>
          <img src={ukImage} alt="" />
          <img className={styles.ukBackground} src={cityBackground} alt="" />
          </div>

          <p>United Kingdom</p>
          <button>See Location</button>
        </div>
      </div>


      <div className={styles.aboutRealDeal}>
        <div style={{ backgroundImage: `url(${twoCirclesBackground})` }} className={styles.aboutRealDealInfo}>
          <h2>The real deal</h2>
          <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
          <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </div>
        <img src={aboutRealDealImage} alt="The real deal" />
      </div>
    </>
  );
};

export default About;
