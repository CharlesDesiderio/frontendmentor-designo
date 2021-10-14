import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import styles from './App.module.css'
import Footer from './components/Footer'
import CallToAction from './components/CallToAction'
import Home from './components/Home'
import WebDesign from './components/WebDesign'
import AppDesign from './components/AppDesign'
import GraphicDesign from './components/GraphicDesign'
import About from './components/About'
import Locations from './components/Locations'

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
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/about" component={About} />
        <Route path="/" component={CallToAction} />
        <Route path="/" component={Footer} />
        <Redirect from="*" to="/" />
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App