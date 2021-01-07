import classes from './Post.module.css';


const Post = (props:any) => {
    return (
        <div className={classes.Post}>
            <p>{ props.post.title }</p>
        </div>
    );
}

export default Post

