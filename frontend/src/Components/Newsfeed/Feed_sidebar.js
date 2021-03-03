import React from 'react'
import './Css/FeedSidebar.css'
import {FaUserFriends} from 'react-icons/fa'
import {GiBackwardTime} from 'react-icons/gi'
import {BiCalendarStar} from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'
import {FiVideo} from 'react-icons/fi'
import {BiStore} from 'react-icons/bi'
const FeedSidebar = () => {
    return (
        <div className='sidebar_container'>
            <ul>
                <li>Benjimen Richards</li>
                <li>Covid 19 Information Centre</li>
                <li><FaUserFriends style={{marginRight:'10px',width:'28px',height:'28px'}}/>Friends</li>
                <li><GiBackwardTime style={{marginRight:'10px',width:'28px',height:'28px'}}/>Memories</li>
                <li><BiStore style={{marginRight:'10px',width:'28px',height:'28px'}}/>MarketPlace</li>
                <li><FiVideo style={{marginRight:'10px',width:'28px',height:'28px'}}/>Watch</li>
                <li><HiUserGroup style={{marginRight:'10px',width:'28px',height:'28px',color:'white'}}/>Groups</li>
                <li><BiCalendarStar style={{marginRight:'10px',width:'28px',height:'28px'}}/>Evenets</li>
                <li></li>
            </ul>
        </div>
    )
}

export default FeedSidebar
