/* import React, { useState, useEffect } from 'react'
import axios from 'axios'


function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);
    const postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'The centarl America',
                body: 'Central America is a subregion of North America. Its political boundaries are defined as bordering Mexico to the north, Colombia to the southeast, the Caribbean to the east, and the Pacific Ocean to the southwest. Central America is usually defined as consisting of seven countries: Belize, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, and Panama. Within Central America is the Mesoamerican biodiversity hotspot, which extends from southern Mexico to southeastern Panama. Due to the presence of several active geologic faults and the Central America Volcanic Arc, there is a high amount of seismic activity in the region, such as volcanic eruptions and earthquakes, which has resulted in death, injury, and property damage.',
                userId: 12345,
            }
        )
            .then(response => {
                setPostMessage(response.status === 201
                    ? `Success! Title: ${response.data.title}`
                    : 'Failed!'
                );
            })
            .catch(error => {
                setPosts(error.message)
            })
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response);
                const data = Array.isArray(response.data)
                    ? response.data
                    : [response.data]
                setPosts(data)
            })
            .catch(error => {
                setError(error.message)
            })
    }, [])
    return (
        <div>
            <button onClick={postToApi}>
                    Create Post
                </button>
                <p>{postMessage}</p>

            <h2>Posts:</h2>
            {
                posts.length ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.id}. {post.title}</h2>
                            <h4>By User ID {post.userId}</h4>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    ))
                ) : (
                    setError.error
                        ? <p>{setError.error}</p>
                        : <h4>Loading posts.....</h4>
                )
            }
        </div>
    )
}

export default HTTPHooks */