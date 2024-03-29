import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage'
import { SearchProvider } from './components/Providers/search/SearchProvider';
import NavBar from './components/NavBar';
import Tickets from './components/Tickets'; 
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Application from './components/Application'; 
import { AuthProvider } from './components/Providers/auth/AuthProvider';
import {ErrorBoundary} from 'react-error-boundary';
import FetchError from './components/FetchError';
import Register from './components/Register';

function App() {
  
  return(
<ErrorBoundary FallbackComponent={FetchError} onError={() => console.log("Error happended")}>
  
<AuthProvider>
    <Router>

        <NavBar> </NavBar>
        <Routes>
          
          <Route 
          exact path='/' element={<LandingPage />}> 
          </Route>
        
          <Route
          exact path='/ticket'
          element={
          <SearchProvider>
      <Tickets />
    </SearchProvider>}/>
        <Route
        exact path='/signin' element={<SignIn/>}>

        </Route>
        <Route
        exact path='/application' element={<Application/>}>

        </Route>
        <Route
        exact path='/register' element={<Register/>}>

        </Route>
        <Route
          exact path='/FetchError' element={<FetchError/>}>
        </Route>
        </Routes>


   
    </Router>

    
 </AuthProvider>
  </ErrorBoundary>
    
  )
}

export default App;
