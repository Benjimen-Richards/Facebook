import React from 'react'
import FeedSidebar from './Feed_sidebar'
import './Css/Newsfeed.css'
import Feedcontent from './Feedcontent'
import Contacts from './Contacts'
const Newsfeed = () => {
    return (
        <div className='Newsfeed_container'>
            <div className='sidebar'>
                <FeedSidebar/>
            </div>
            <div className='content'>
            <Feedcontent/>
            </div>
            <div className='contacts'>
                <Contacts/>
            </div>
        </div>
    )
}

export default Newsfeed
