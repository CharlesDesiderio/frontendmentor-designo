import Header from './components/Header'
import styles from './App.module.css'
import Footer from './components/Footer'
import CallToAction from './components/CallToAction'

const App = () => {
  return (
    <div>
    <div className={styles.app}>
      <Header />
      <CallToAction />
    </div>
      <Footer />
    </div>
  )
}

export default App