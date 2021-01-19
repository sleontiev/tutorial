import React, {useState, useEffect, FC, ChangeEvent} from 'react';
import './News.css';

type typeProps = {
    name?: string,
    content?: string,
    changeTitle?: ((e: React.FocusEvent<HTMLInputElement>) => void)|undefined,
    changeContent?: ((e: React.FocusEvent<HTMLTextAreaElement>) => void)|undefined,
    onDeleteNews?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
}

const News: FC<typeProps> = (props) => {
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
                changeModContent && <textarea defaultValue={content} onChange={props.changeContent} autoFocus onBlur={() => {setChangeModContent(false)}}/>
            }
            <button className="news-button" onClick={props.onDeleteNews}>Удалить</button>
        </div>
    )
}

export default News
