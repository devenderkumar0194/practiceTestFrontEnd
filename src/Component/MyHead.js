import { Link, useLocation } from "react-router-dom";

const MyHead = (props) => {

    const location = useLocation();


    return (<>
        <div class="container-fluid p-5 bg-primary text-white text-center">
            <h1>{ props.heading}</h1>
            <p>{ props.desc }</p>
            <ul className="nav-bar">
                
                <li><Link to="/" className="btn btn-secondary">Home</Link></li>

                { location.pathname !== '/login' && (
                    <li><Link to="/login" className="btn btn-secondary">Login</Link></li>
                ) }    
                
            </ul>
            
            
      </div>
    </>);

}

export default MyHead;