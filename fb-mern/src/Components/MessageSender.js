import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar, Input } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'


const MessageSender = () => {
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log("Submitting...")


    }

    return (
        <div className='messageSender' >
            <div className="messageSender__top">
                <Avatar src="https://lite-images-i.scdn.co/image/ab67616d0000b273f2788cb7e200d513a5bc9ab6" />
                <form >
                    <input type="text" className='messageSender__input' placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)} />
                    <Input type="file" className='messageSender__fileSelector' onChange={handleChange} />
                    <button onClick={handleSubmit} type='submit' >Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender