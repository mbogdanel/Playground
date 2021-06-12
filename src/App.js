import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AboutMe from './screens/AboutMe'
import Contact from './screens/Contact'
import GitHub from './screens/GitHub'
import HeroPage from './screens/HeroPage'
import Projects from './screens/Projects'

function App() {
  return (
    <Router>
      <div className='app'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HeroPage} />
          <Route path='/about' component={AboutMe} />
          <Route path='/projects' component={Projects} />
          <Route path='/github' component={GitHub} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}
export default App
