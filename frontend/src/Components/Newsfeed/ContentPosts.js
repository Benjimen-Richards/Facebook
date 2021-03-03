import React, { Component } from 'react'
import postdata from '../../Postdata'
import './Css/Contentpost.css'
class ContentPosts extends Component {
    rendercard=(data)=>
    {
        if(data)
        {
return data.map(post=>(
    <div className='Contentpost_container'>
    <div className='post_user_details'>{post.name}</div>
            <div className='post_description'>{post.description}</div>
            <div className='post_img'><img src={post.image} alt='/'/></div>
            <div className='post_likes'>
                <div className='likesDetails'>
                    <h4>{post.likes} likes</h4>
                    <h4>{post.comment} comment</h4>
                </div>
                <hr/>
                <div className='post_card_buttons'>
                    <button>like</button>
                    <button>Comment</button>
                    <button>share</button>
                </div>
            </div>
            </div>
))
        }
    }
   render()
   {
    //    console.log("post",postdata)
    return (
        <div>
            {this.rendercard(postdata)}
        </div>
    )
   }
}

export default ContentPosts
