export default (props) => (
    <div className="news-item">
        <h3 className="news-title">{props.name}</h3>
        <p className="news-preview">{props.content}</p>
    </div>
);
