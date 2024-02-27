import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage'

import NavBar from './components/NavBar';
import Tickets from './components/Tickets'; 
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Application from './components/Application'; 


function App() {
  return(
    <Router>

        <NavBar> </NavBar>
        <Routes>
          
          <Route 
          exact path='/' element={<LandingPage/>}> 
          </Route>
        
        <Route
        exact path='/ticket' element={<Tickets/>}>

        </Route>
        <Route
        exact path='/signin' element={<SignIn/>}>

        </Route>
        <Route
        exact path='/application' element={<Application/>}>

        </Route>

        </Routes>
   
    </Router>

    
 
    
  )
}

export default App;
