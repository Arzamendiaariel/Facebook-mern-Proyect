import React from 'react'
import { Avatar } from '@mui/material'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ChatBubbleOutIcon from '@mui/icons-material/ChatBubble'
import NearMeIcon from '@mui/icons-material/NearMe'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'

const Post = ({profilePic, imgName, username, timestamp, message}) => {
return (
    <div className='post'>
        <div className='post__top'>
            <Avatar src = {profilePic} className= 'post__avatar' />
            <div className='post__topInfo'>

                <h3>{username}</h3>
                <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
            </div>
        </div>

        <div className="post__options">
            <div className="post__options">
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className="post__options">
                <ChatBubbleOutIcon />
                <p>Comment</p>
            </div>
            <div className="post__options">
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className="post__options">
                <AccountCircleIcon />
                <ExpandMoreOutlined />
            </div>
        </div>
            </div>      
    )
}

export default Post
