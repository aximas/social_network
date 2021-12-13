import React from 'react';
import styles from './Myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsItem = props.posts.map(post => <Post key={post.id} text={post.text}
                                                              likesCount={post.likesCounter} avatar={post.img_url}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsItem}
            </div>
        </div>
    );
}

export default MyPosts;
