import React from 'react';
import styles from './Myposts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from "redux-form";

const MyPosts = (props) => {
    let postsItem = props.posts.map(post => <Post key={post.id} text={post.text}
                                                              likesCount={post.likesCounter} avatar={post.img_url}/>);

    let addPost = (values, dispatch) => {
        console.log(values.myPostText);
        props.addPostActionCreator(values.myPostText);
        dispatch(reset('MyPostForm'))
    };

    return (
        <div>
            My posts
            <MyPostForm onSubmit={addPost}/>
            <div className={styles.posts}>
                {postsItem}
            </div>
        </div>
    );
}

let MyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component="textarea" name="myPostText"/>
        <button>Add Post</button>
    </form>
}

MyPostForm = reduxForm({form: 'MyPostForm'})(MyPostForm)

export default MyPosts;
