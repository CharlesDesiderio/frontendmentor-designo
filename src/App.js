import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import styles from './App.module.css'
import Footer from './components/Footer'
import CallToAction from './components/CallToAction'
import Home from './components/Home'
import WebDesign from './components/WebDesign'
import AppDesign from './components/AppDesign'
import GraphicDesign from './components/GraphicDesign'

const App = () => {
  return (
    <div>
    <div className={styles.app}>
      <BrowserRouter>
        <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/webdesign" component={WebDesign} />
          <Route exact path="/appdesign" component={AppDesign} />
          <Route exact path="/graphicdesign" component={GraphicDesign} />
          <Route path="/" component={CallToAction} />
        <Redirect from="*" to="/" />
      </BrowserRouter>
    </div>
      <Footer />
    </div>
  )
}

export default App