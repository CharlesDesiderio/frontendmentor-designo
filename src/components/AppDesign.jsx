import styles from './AppDesign.module.css'

import { Link } from 'react-router-dom'

import ProjectCard from './ProjectCard'

import bgImage from '../assets/app-design/desktop/bg-pattern-intro-app.svg'

import webBackground from '../assets/home/desktop/image-web-design-small.jpg'

import graphicBackground from '../assets/home/desktop/image-graphic-design.jpg'

import rightArrow from '../assets/shared/desktop/icon-right-arrow.svg'

const AppDesign = (props) => {

  const projectsData = [
    {
      name: 'Airfilter',
      description: 'Solving the problem of poor indoor air quality by filtering the air',
      imageUrl: 'image-airfilter.jpg'
    },
    {
      name: 'Eyecam',
      description: 'Product that lets you edit your favorite photos and videos at any time',
      imageUrl: 'image-eyecam.jpg'
    },
    {
      name: 'Faceit',
      description: 'Get to meet your favorite internet superstar with the faceit app',
      imageUrl: 'image-faceit.jpg'
    },
    {
      name: 'Todo',
      description: 'A todo app that features cloud sync with light and dark mode',
      imageUrl: 'image-todo.jpg'
    },
    {
      name: 'Loopstudios',
      description: 'A VR experience app made for Loopstudios',
      imageUrl: 'image-loopstudios.jpg'
    },
  ]

    return (
      <>
      <div style={{ backgroundImage: `url(${bgImage})` }} className={styles.appDesignTitle}>
      <h1>App Design</h1>
      <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
    </div>
      <div className={styles.appDesignProjects}>
        {projectsData.map((project) => {
          return <ProjectCard source='app-design' name={project.name} description={project.description} imageUrl={project.imageUrl} />
        })}
      </div>

      <div className={styles.appDesignLinks}>
        <Link className={styles.appDesignLinkAnchor} to="/webdesign">
        <div style={{backgroundImage: `url(${webBackground})`}}  className={styles.appDesignLink}>
        <h2>Web Design</h2>
          <p>View Projects<img alt=">" src={rightArrow} /></p> 
        </div>
        </Link>
        <Link className={styles.appDesignLinkAnchor} to="/graphicdesign">
        <div style={{backgroundImage: `url(${graphicBackground})`}}  className={styles.appDesignLink}>
        <h2>Graphic Design</h2>
          <p>View Projects<img alt=">" src={rightArrow} /></p> 
        </div>
        </Link>

      </div>
      </>
    )
}

export default AppDesign