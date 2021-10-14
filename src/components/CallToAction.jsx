import styles from './CallToAction.module.css'
import background from '../assets/shared/desktop/bg-pattern-call-to-action.svg'

const CallToAction = () => {
  return (
    <div className={styles.callToAction} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.blurb}>
        <h2>Let's talk about your project</h2>
        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </div>
      <button className={styles.getInTouch}>Get In Touch</button>
    </div>
  )
}

export default CallToAction