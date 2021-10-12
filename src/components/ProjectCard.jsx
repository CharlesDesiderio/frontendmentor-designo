import styles from './ProjectCard.module.css'

const ProjectCard = (props) => {

const imagePath = require(`../assets/${props.source}/desktop/${props.imageUrl}`).default

  return (
    <div className={styles.ProjectCard}>
      <img className={styles.ProjectCardImage} src={imagePath} alt="" />
      <div className={styles.ProjectCardInfo}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard