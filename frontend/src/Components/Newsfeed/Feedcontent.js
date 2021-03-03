import React, { Component } from 'react'
import {CgProfile} from 'react-icons/cg'
import ContentPosts from './ContentPosts'
import './Css/Feedcontent.css'
class Feedcontent extends Component{
  render()
  {
    return (
        <div className='Feedcontent_container'>
            <div className='Post_container'>
                <div className='post_input'>
                    <CgProfile style={{width:'40px',height:'40px'}}/>
                    <input placeholder='Whats on your mind?Benjimen'/>
                </div>
                <hr/>
                <div className='post_buttons'>
                    <button>Live video</button>
                    <button>Photo/video</button>
                    <button>Activity</button>
                </div>
            </div>
           <div className='contents'>
           <ContentPosts/>
           </div>
        </div>
    )
  }
}

export default Feedcontent
