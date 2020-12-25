import React, {useState, useEffect} from 'react';
import './News.css';
export default (props) => {
    const [changeModTitle, setChangeModTitle] = useState(false);
    const [changeModContent, setChangeModContent] = useState(false);
    const [title, setTitle] = useState(props.name);
    const [content, setContent] = useState(props.content);
    console.log(props, props.name)

    useEffect(() => {
        setTitle(props.name)
    }, [props.name]);

    useEffect(() => {
        setContent(props.content)
    }, [props.content]);

    return (
        <div className="containerTabs">
            {
                !changeModTitle && <h3 className="news-title" onDoubleClick={() => {setChangeModTitle(true)}}>{title}</h3>
            }
            {
                changeModTitle && <input type="text" defaultValue={title} onChange={props.changeTitle} autoFocus onBlur={() => {setChangeModTitle(false)}}/>
            }
            {
                !changeModContent && <p className="news-preview" onDoubleClick={() => {setChangeModContent(true)}}>{content}</p>
            }
            {
                changeModContent && <textarea type="text" defaultValue={content} onChange={props.changeContent} autoFocus onBlur={() => {setChangeModContent(false)}}/>
            }
            <button className="news-button" onClick={props.onDeleteNews}>Удалить</button>
        </div>
    )
}
