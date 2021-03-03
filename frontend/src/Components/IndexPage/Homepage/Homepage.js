import {Component} from 'react'
import './Homepage.css'
class Homepage extends Component
{
    render()
    {
        return(
            <div className='page_container'>
                <div className='facebook_logo'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='facebookLogo'/>
                <span>Facebook helps you connect and share with the people in your life.</span>
                </div>
                <form className='form_container'>
                        <div className='Homepage_form_inputs'>
                        <input placeholder='Email address or Phone number'/>
                        <input placeholder='Password'/>
                        </div>
                        <div>
                        <button className='btn btn-success' id='login_button' >Log In</button>
                        </div>
                        <div className='form_span'>
                        <span >Forgetten Password?</span>
                        </div>
                        <hr style={{width:'80%',marginLeft:'40px'}}/>
                       <div>
                       <button className='btn btn-warning' id='create_button'>Create New Account</button>
                       </div>
                    </form>
                </div>
         
        )
    }
}
export default Homepage