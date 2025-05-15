import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Axios_API from '../Axios_Api';

const MyHead = (props) => {

   // const location = useLocation();
    const navigate = useNavigate();
    
    const { isAuthenticated,setIsAuthenticated, user, setUser} = useAuth();

    const handleLogout = async () => {

        await Axios_API.logout();
        setIsAuthenticated(false);
        setUser({});
        navigate('/login');
    
    }



    return (<>
        <div className="container-fluid p-5 bg-primary text-white text-center">
            <h1>{ props.heading}</h1>
            <p>{ props.desc }</p>
            <ul className="nav-bar">

                {isAuthenticated && (user.name) }

                <li><Link to="/" className="btn btn-secondary">Home</Link></li>

                { !isAuthenticated && (
                    <li><Link to="/login" className="btn btn-secondary">Login</Link></li>
                ) }  

                { isAuthenticated && (
                    <li><button onClick={handleLogout} className="btn btn-secondary">Log Out</button></li>
                ) }  
                
            </ul>
            
            
      </div>
    </>);

}

export default MyHead;