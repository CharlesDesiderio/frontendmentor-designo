import Header from './components/Header'
import styles from './App.module.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  )
}

/*

layout:
ALL PAGES: HEADER, CTA, FOOTER

*/

export default App