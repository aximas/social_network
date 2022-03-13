import React from 'react';
import styles from './Myposts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";

let maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsItem = props.posts.map(post => <Post key={post.id} text={post.text}
                                                              likesCount={post.likesCounter} avatar={post.img_url}/>);

    let addPost = (values, dispatch) => {
        // console.log(values.myPostText);
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
    // console.log(props);
    return <form onSubmit={props.handleSubmit}>
        <Field component={TextArea} name="myPostText" validate={[required, maxLength10]} placeholder="Type post"/>
        <button>Add Post</button>
    </form>
}

MyPostForm = reduxForm({form: 'MyPostForm'})(MyPostForm)

export default MyPosts;
