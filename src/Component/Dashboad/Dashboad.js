import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import MyHead from "../MyHead";

const Dashboard = () => {
    const navigate = useNavigate();
    const { isAuthenticated} = useAuth();
    console.log(isAuthenticated);
    
    if(!isAuthenticated){
        navigate('/login');
    }else{
        return <>
         <MyHead heading="Dashboard" desc="Resize this responsive page to see the effect!" />
        </>;

    }

}

export default Dashboard;