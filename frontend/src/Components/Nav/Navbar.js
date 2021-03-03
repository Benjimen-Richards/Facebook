import './Navbar.css'
import React, { useState } from 'react'
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
const Navbar = () => {
    const [visible, setvisible] = useState('none')
    const displayhandler=()=>
    {
        if(visible==='none')
        {
            setvisible("block")
        }
        else
        {
            setvisible("none")
        }
    }
    return (
        <div className='nav_container'>
            <div className='fblogo'>
            <Link to='/feed'><img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'  alt='/'/></Link>
            <input placeholder='enter to search'/>
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
                <AiFillCaretDown className='nav_icons3' id='more_options' onClick={displayhandler}/>
            </div>
            <AiOutlineMenu className='dropdown_button'  onClick={displayhandler}/>
            <div className='dropdown' style={{display:visible}}>
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
}

export default Navbar
