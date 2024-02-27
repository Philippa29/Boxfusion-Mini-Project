import {Navigate} from 'react-router-dom'
import SignIn  from './SignIn';

const withAuth = (WrappedComponent) => {

    const WithAuth = (props) => {
        const access = localStorage.getItem("access");
        

        if (access === false) {
            console.log("access in withauth: ", access); 
            return (
                // <Route
                // exact path='/signin' element={<SignIn/>}/>
                 <Navigate to="./SignIn"/> 
            );
        } 
        // Our inner component needs to return the wrapped component and provide it with its props
        return <WrappedComponent {...props} />;
    } 
    // Our hoc needs to return this inner component
    return WithAuth;
};



export default withAuth; 