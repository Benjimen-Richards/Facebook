import Coverdiv from "./Coverdiv";
import Operations from "./operations/Operations";
import UserNewsfeed from './operations/UserNewsfeed'
import './css/Userprofile.css'
import { Route } from "react-router-dom";
import Friends from "./operations/Friends";

const Userprofile=()=>
{
    
    return(
            <div>
           
                <div className='Userprofile_container'>
                    <Coverdiv/>
                    <Operations/>
                   
                </div>
                <UserNewsfeed />
                <Route path='/profile/friends' component={Friends} />
            </div>
        )
    }
    

export default Userprofile