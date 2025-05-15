import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

const MyHead = (props) => {

    const location = useLocation();
    
    const {isAuthenticated} = useAuth();

    return (<>
        <div className="container-fluid p-5 bg-primary text-white text-center">
            <h1>{ props.heading}</h1>
            <p>{ props.desc }</p>
            <ul className="nav-bar">
                
                { isAuthenticated}

                <li><Link to="/" className="btn btn-secondary">Home</Link></li>

                { location.pathname !== '/login' && (
                    <li><Link to="/login" className="btn btn-secondary">Login</Link></li>
                ) }    
                
            </ul>
            
            
      </div>
    </>);

}

export default MyHead;