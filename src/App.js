import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>            
            <Navbar/>
            <br />
            <Switch>
            <Route path="/#Home" component={Home}/>
            
            </Switch> 
            
        </Router>
      </div>
    )
  }
}

export default App