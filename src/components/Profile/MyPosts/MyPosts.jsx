import React from 'react'
import { addPostActionCreatior, updaeNewPost } from '../../../redux/profile-reduce';
import classes from "./MyPosts.module.css"
import Post from './Post/Post';




const MyPosts = (props) => {
	let getValueText = React.createRef();
	let addPost = () => {
		props.dispatch(addPostActionCreatior(getValueText))

	}
	let showPostChangetext = () => {
		props.dispatch(updaeNewPost(getValueText))
	}
	return (
		<div className={classes.myPost}>
			My post
			<div>
				<textarea onChange={showPostChangetext} value={props.profilePage.showProfileText.texareaValue} ref={getValueText} />
				<button onClick={addPost}>Add post</button>
			</div>
			<Post profilePostData={props.profilePage.postData} />

		</div>


	)
}

export default MyPosts; 