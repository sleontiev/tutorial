import React, {useState, useEffect} from 'react';
import classes from "./TenIteration.module.css";
import Post from "../Post/Post";


function useLogger(value:string) {
    useEffect(() => {
        console.log(`Changed: ${value}`)
    }, [value])
}

function useInput(initialValue:string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e:React.FocusEvent<HTMLInputElement>) => setValue(e.target.value);

    const clear = () => setValue('');

    return {
        bind: {
            value, onChange,
        },
        value,
        clear,
    }
}

export default () => {
    const [type, setType] = useState<string>('todos');
    const [data, setData] = useState<string[]>([]);

    const input = useInput('');

    useLogger(input.value);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}/`)
            .then(response => response.json() as Promise<string[]>)
            .then(json => setData(json))
    }, [type]);

    return (
        <div className={classes.TenIteration}>
            <input type="text" {...input.bind}/>
            <button onClick={() => input.clear()}>Очистить</button>
            <h1>{input.value}</h1>
            <hr/>
            <h1>{type}</h1>
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
