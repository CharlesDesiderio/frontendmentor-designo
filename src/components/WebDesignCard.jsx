import styles from './WebDesignCard.module.css'

const WebDesignCard = (props) => {

const imagePath = require(`../assets/web-design/desktop/${props.imageUrl}`).default

  return (
    <div className={styles.webDesignCard}>
      <img className={styles.webDesignCardImage} src={imagePath} alt="" />
      <div className={styles.webDesignCardInfo}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default WebDesignCard