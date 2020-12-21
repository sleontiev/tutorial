import React from 'react';
import './Posts.css';

export default ( {posts} ) => {
    return (
        <div>
            {posts.map((post, index) => (
                <div className="containerTabs" key = {index}>
                    <h3 className="news-title">{post.id}</h3>
                    <p className="news-preview">{post.title}</p>
                </div>
            ) )}
        </div>
    )
}
