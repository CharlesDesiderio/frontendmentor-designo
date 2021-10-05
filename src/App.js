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

/*

layout:
ALL PAGES: HEADER, CTA, FOOTER

*/

export default App