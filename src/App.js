import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Education from './Pages/Education'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>            
            <Navbar/>
            <br />
            <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Education" component={Education}/>
            <Route path="/Project" component={Project}/>
            <Route path="/Contact" component={Contact}/>
            </Switch> 
            
        </Router>
      </div>
    )
  }
}

export default App