import styles from './WebDesign.module.css'

import WebDesignCard from "./WebDesignCard"

import bgImage from '../assets/web-design/desktop/bg-pattern-intro-web.svg'

const WebDesign = () => {

  let projectsData = [
    {
      name: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses',
      imageUrl: 'image-express.jpg'
    },
    {
      name: 'Transfer',
      description: 'Site for low-cost money transfers and sending money within seconds',
      imageUrl: 'image-transfer.jpg'
    },
    {
      name: 'Photon',
      description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
      imageUrl: 'image-photon.jpg'
    },
    {
      name: 'Builder',
      description: 'Connects users with local contractors based on their location',
      imageUrl: 'image-builder.jpg'
    },
    {
      name: 'Blogr',
      description: 'Blogr is a platform for creating an online blog or publication',
      imageUrl: 'image-blogr.jpg'
    },
    {
      name: 'Camp',
      description: 'Get expert training in coding, data, design, and digital marketing',
      imageUrl: 'image-camp.jpg'
    },
  ]

  return (
    <>
    <div style={{ backgroundImage: `url(${bgImage})` }} className={styles.webDesignTitle}>
      <h1>Web Design</h1>
      <p>We build websites that serve as powerful marketing tools 
and bring memorable brand experiences.</p>
    </div>
    <div className={styles.webDesignProjects}>
      {projectsData.map((project) => {
        return <WebDesignCard name={project.name} description={project.description} imageUrl={project.imageUrl} />
      })}
    </div>
    </>
  )
}

export default WebDesign