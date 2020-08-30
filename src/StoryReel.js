import React from 'react'
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            {/* story */}
             <Story
             image="story1.jpeg"
             profileSrc="user-demo.png"
             title="Bp Krk"
             />   
             <Story
             image="story2.jpg"
             profileSrc="user-demo.png"
             title="BK2 Krk2"
             />   
             <Story
             image="story3.jpeg"
             profileSrc="user-demo.png"
             title="CK2 Krk2"
             />   
             <Story
             image="story4.jpeg"
             profileSrc="user-demo.png"
             title="BP4 krk4"
             />   
             <Story
             image="story5.jpg"
             profileSrc="user-demo.png"
             title="BP5 krk5"
             />   
        </div>
    )
}

export default StoryReel
