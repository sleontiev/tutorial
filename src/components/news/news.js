import './News.css';
export default (props) => {
    return (
        <div className="containerTabs">
            <h3 className="news-title">{props.name}</h3>
            <p className="news-preview">{props.content}</p>
            <button className="news-button" onClick={props.onDeleteNews}>Удалить</button>
        </div>
    )
}
