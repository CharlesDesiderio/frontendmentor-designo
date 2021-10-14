import styles from './Locations.module.css'

import canadaMap from '../assets/locations/desktop/image-map-canada.png'

import ausMap from '../assets/locations/desktop/image-map-australia.png'

import ukMap from '../assets/locations/desktop/image-map-united-kingdom.png'

import twoCirclesBackground from '../assets/shared/desktop/bg-pattern-two-circles.svg';

const Locations = () => {
  return (
    <>
    <div className={styles.locationsList}>

    <div className={styles.locationsLocation}>
      <div style={{ backgroundImage: `url(${twoCirclesBackground})` }} className={styles.locationsLocationInfo}>
        <h2>Canada</h2>
        <div className={styles.locationsLocationDetails}>
          <ul>
            <li><strong>Designo Central Office</strong></li>
            <li>3886 Wellington Street</li>
            <li>Toronto, Ontario M9C 3J5</li>
          </ul>
          <ul>
            <li><strong>Contact</strong></li>
            <li>P : +1 253-863-8967</li>
            <li>M : contact@designo.co</li>
          </ul>
        </div>
      </div>
      <img src={canadaMap} alt="" />
    </div>
    <div className={styles.locationsLocation}>
      <div style={{ backgroundImage: `url(${twoCirclesBackground})` }} className={styles.locationsLocationInfo}>
        <h2>Australia</h2>
        <div className={styles.locationsLocationDetails}>
          <ul>
            <li><strong>Designo AU Office</strong></li>
            <li>19 Balonne Street</li>
            <li>New South Wales 2443</li>
          </ul>
          <ul>
            <li><strong>Contact</strong></li>
            <li>P : (02) 6720 9092</li>
            <li>M : contact@designo.au</li>
          </ul>
        </div>
      </div>
      <img src={ausMap} alt="" />
    </div>
    <div className={styles.locationsLocation}>
      <div style={{ backgroundImage: `url(${twoCirclesBackground})` }} className={styles.locationsLocationInfo}>
        <h2>United Kingdom</h2>
        <div className={styles.locationsLocationDetails}>
          <ul>
          <li><strong>Designo UK Office</strong></li>
          <li>13  Colorado Way</li>
          <li>Rhyd-y-fro SA8 9GA</li>
          </ul>
          <ul>
          <li><strong>Contact</strong></li>
          <li>P : 078 3115 1400</li>
          <li>M : contact@designo.uk</li>
          </ul>
        </div>
      </div>
      <img src={ukMap} alt="" />
    </div>


    </div>
    </>
  )
}

export default Locations