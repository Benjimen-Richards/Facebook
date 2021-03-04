import './Navbar.css'
import React, { Component } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsCameraVideo} from 'react-icons/bs'
import {IoStorefrontOutline} from 'react-icons/io5'
import {HiUserGroup} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import {IoAddOutline} from 'react-icons/io5'
import {SiMessenger} from 'react-icons/si'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { users } from '../../Postdata'
import axios from 'axios';
const users_url = 'http://localhost:1111/user/allusers'
const frdrequest_url = 'http://localhost:1111/user/frdrequest'

class Navbar extends Component{
    constructor()
    {
        super()
        this.state={
            visible:'none',
            urlvisible:'none',
            searchlist:'',
            searchlistdisplay:'none',
            users:''
        }
    }
    displayhandler=()=>
    {
        this.state.visible==="none"?this.setState({visible:'block'}):this.setState({visible:'none'})
    }
    requesthandler=(id)=>
    {
        console.log(id)
        axios.put(`${frdrequest_url}/${id}`).then(res=>console.log("user",res.data))
    }
     rendersearch=(data)=>
    {
        if(data)
        {
            return data.map(item=>(
               
                    <li>{item.firstname} <button className='btn btn-success' onClick={()=>this.requesthandler(item._id)}>Addfirend</button></li>
            ))
        }
    }
     changehandler=(e)=>
    {
        if(e.target.value!=='')
        {
            this.setState({searchlistdisplay:'block'})
            if (this.state.users) {
                const list = this.state.users.filter(item => (
                    item.firstname.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
                ))
                const lastname = this.state.users.filter(item => (
                    item.lastname.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
                ))
                // console.log("users",list ||lastname)

            this.setState({searchlist:list || lastname})
            }
        }
        else
        {
            this.setState({searchlistdisplay:'none'})
        }
        
    }
    render()
    {
        
    return (
        <div className='nav_container' style={{display:this.state.urlvisible}}>
            <div className='fblogo'>
            <Link to='/feed'><img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'  alt='/'/></Link>
            <input placeholder='enter to search' onChange={this.changehandler}/>
           <div className='searchlist' style={{display:this.state.searchlistdisplay}}>
           {this.rendersearch(this.state.searchlist)}
           </div>
            </div>
            <div className='navbar_icons'>
                <Link to='/feed' style={{color:"white"}}><AiOutlineHome className='nav_icons2'/></Link>
                <BsCameraVideo className='nav_icons2'/>
                <IoStorefrontOutline className='nav_icons2'/>
                <HiUserGroup className='nav_icons2' style={{border:'1px solid white',borderRadius:'50%'}}/>
            </div>
            <div className='userProfile_div'>
                <Link to='/profile' style={{color:"white"}}><CgProfile className='nav_icons2'/></Link>
                <IoAddOutline className='nav_icons3' />
                <SiMessenger className='nav_icons3' />
                <IoMdNotificationsOutline className='nav_icons3' />
                <AiFillCaretDown className='nav_icons3' id='more_options' onClick={this.displayhandler}/>
            </div>
            <AiOutlineMenu className='dropdown_button'  onClick={this.displayhandler}/>
            <div className='dropdown' style={{display:this.state.visible}}>
                <ul>
                    <Link to='/profile' style={{color:'white',textDecoration:'none'}}><li>Profile name</li></Link>
                    <li>feedbacck</li>
                    <li>settings</li>
                    <li>settingshelp and support</li>
                    <li>Display</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    )
}componentDidMount()
{
    const path =window.location.pathname
    path==='/'?this.setState({urlvisible:'none'}):this.setState({urlvisible:'flex'})
    axios.get(users_url).then(res=>this.setState({users:res.data}))
    // console.log("userurl",users_url)
}
}

export default Navbar
