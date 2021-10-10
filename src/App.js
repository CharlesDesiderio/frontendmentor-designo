import { BrowserRouter, Route, Redirect } from 'react-router-dom'

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

      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/webdesign" component={WebDesign} />
        <Redirect from="*" to="/" />
      </BrowserRouter>
      <CallToAction />
    </div>
      <Footer />
    </div>
  )
}

export default App