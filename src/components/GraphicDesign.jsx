import styles from './GraphicDesign.module.css'

import { Link } from 'react-router-dom'

import ProjectCard from './ProjectCard'

import leafBackground from '../assets/shared/desktop/bg-pattern-leaf.svg'

import bgImage from '../assets/app-design/desktop/bg-pattern-intro-app.svg'

import webBackground from '../assets/home/desktop/image-web-design-small.jpg'

import appBackground from '../assets/home/desktop/image-app-design.jpg'

import rightArrow from '../assets/shared/desktop/icon-right-arrow.svg'

const GraphicDesign = () => {

  const projectsData = [
    {
      name: 'Tim Brown',
      description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
      imageUrl: 'image-change.jpg'
    },
    {
      name: 'Boxed Water',
      description: 'A simple packaging concept made for Boxed Water',
      imageUrl: 'image-boxed-water.jpg'
    },
    {
      name: 'Science!',
      description: 'A poster made in collaboration with the Federal Art Project',
      imageUrl: 'image-science.jpg'
    },
  ]


  return (
    <>
        <img className={styles.leaf} src={leafBackground} alt="Leaf" />
      <div style={{ backgroundImage: `url(${bgImage})` }} className={styles.graphicDesignTitle}>
      <h1>Graphic Design</h1>
      <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.
</p>
    </div>
      <div className={styles.graphicDesignProjects}>
        {projectsData.map((project) => {
          return <ProjectCard source='graphic-design' name={project.name} description={project.description} imageUrl={project.imageUrl} />
        })}
      </div>

      <div className={styles.graphicDesignLinks}>
      <Link className={styles.graphicDesignLinkAnchor} to="/appdesign">
        <div style={{backgroundImage: `url(${appBackground})`}}  className={styles.graphicDesignLink}>
        <h2>App Design</h2>
          <p>View Projects<img alt=">" src={rightArrow} /></p> 
        </div>
        </Link>
        <Link className={styles.graphicDesignLinkAnchor} to="/webdesign">
        <div style={{backgroundImage: `url(${webBackground})`}}  className={styles.graphicDesignLink}>
        <h2>Web Design</h2>
          <p>View Projects<img alt=">" src={rightArrow} /></p> 
        </div>
        </Link>


      </div>
    </>
  )
}

export default GraphicDesign