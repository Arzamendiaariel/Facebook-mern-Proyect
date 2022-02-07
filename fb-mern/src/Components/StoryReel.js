import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel' >
            <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc="https://pbs.twimg.com/profile_images/783415155573088256/I4NK5-5o_400x400.jpg"
                title='Pocho La Pantera'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc="https://i.scdn.co/image/ab6761610000e5eb9382fc7588f9c8d3b1e3f35a"
                title='Violencia RIvas '
            />
            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc="https://i.guim.co.uk/img/media/58ad228c3b8bf752f9198cd7f382dffd4a85b896/0_40_2172_1303/master/2172.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=580e601c199596326d6ed755d2a080c5"
                title='Carlos Menem'
            />

        </div>
    )
}

export default StoryReel