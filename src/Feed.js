import React, { useState, useEffect } from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );

    }, []);

    return (
        <div className="feed">
            {/* Storyreel */}
            <StoryReel />

            {/* Messagesender */}
            <MessageSender />

            {/* Post */}
            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                    image={post.data.image}
                />
            ))
            }




        </div>
    )
}

export default Feed
