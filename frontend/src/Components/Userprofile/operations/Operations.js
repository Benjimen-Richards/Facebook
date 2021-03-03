import { Component } from "react";
import { Link } from "react-router-dom";
import './Css/Operations.css'
// import {AiOutlineMenu} from 'react-icons/ai'
class Operations extends Component
{
    constructor()
    {
        super()
        this.state={
            visible:'none'
        }
    }
     displayhandler=()=>
    {
        if(this.state.visible==='none')
        {
            this.setState({visible:"block"})
        }
        else
        {
            this.setState({visible:"none"})
        }
    }
    render()
    {
        
        return(
            <div className='Operations_container'>
    <hr style={{width:'80%',color:'white',marginLeft:'10%'}}/>
                <div className='pages_nav'>
                <div className='pages_nav_left'>
                    <Link to='/profile/bio'>
                    <button>Posts</button>
                    </Link>
                    <Link to='/profile/friends'><button>Friends</button></Link>
                    <button>About</button>
                    <button>photos</button>
                    <button>More</button>
                </div>
                <div className='pages_nav_right'>
                    <button>Edit profile</button>
                    <button>edit</button>
                    <button>show</button>
                    <button>...</button>
                </div>
                </div>
            </div>
        )
    }
}
export default Operations