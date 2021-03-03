import Coverdiv from "./Coverdiv";
import Operations from "./operations/Operations";
import UserNewsfeed from "./operations/UserNewsfeed";
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
                <Route path='/profile/friends' component={Friends}/>
                <Route path='/profile/bio' component={UserNewsfeed}/>
            </div>
        )
    }
    

export default Userprofile