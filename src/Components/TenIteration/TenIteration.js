import React, {useState, useEffect} from 'react';
import classes from "./TenIteration.module.css";
import Post from "../Post/Post";

export default () => {
    const [type, setType] = useState('todos');
    const [colored, setColored] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}/`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);

    return (
        <div className={classes.TenIteration}>
            <h1
                onClick={() => setColored(!colored)}
                style = {{
                    cursor: "pointer",
                    color: colored ? 'black' : 'grey'
                }}>
                {type}
            </h1>
            <button onClick={() => setType('todos')}>Todo</button>
            <button onClick={() => setType('posts')}>Posts</button>
                <div className={classes.TenIteration_wrap}>
                {data.map((post, index) => (
                        <Post
                            key = {index}
                            post = {post}
                        />
                        )
                )}
                </div>
        </div>
    )
}
