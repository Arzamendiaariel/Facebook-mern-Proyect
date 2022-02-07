import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import "./Feed.css"

const Feed = () => {
    return (
        <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post 
            profilePic = "https://lite-images-i.scdn.co/image/ab67616d0000b273f2788cb7e200d513a5bc9ab6"
            message='El mensajito'
            timestamp= 'time'
            imgName = 'imgName'
            username = 'Arielito'
        />
        </div>
    )
}

export default Feed
