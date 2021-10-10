import Header from './components/Header'
import styles from './App.module.css'
import Footer from './components/Footer'
import CallToAction from './components/CallToAction'
import Home from './components/Home'
import WebDesign from './components/WebDesign'

const App = () => {
  return (
    <div>
    <div className={styles.app}>
      <Header />

        <Home />

        <WebDesign />

      <CallToAction />
    </div>
      <Footer />
    </div>
  )
}

export default App