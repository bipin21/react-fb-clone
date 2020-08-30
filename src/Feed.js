import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {
    return (
        <div className="feed">
            {/* Storyreel */}
            <StoryReel />

            {/* Messagesender */}
            <MessageSender />

            {/* Post */}
            <Post
                profilePic="user-demo.png"
                username="bipin karki"
                timestamp="2020-08-30"
                message="Hello this is my first post"
                image="story1.jpeg"
            />

            <Post
                profilePic="user-demo.png"
                username="user 2"
                timestamp="2020-08-30"
                message="Second post"
                image="story2.jpg"
            />


        </div>
    )
}

export default Feed
