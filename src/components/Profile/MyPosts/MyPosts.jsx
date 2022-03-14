import React from 'react'
import classes from "./MyPosts.module.css"
import Post from './Post/Post';


const MyPosts = (props) => {
	let getValueText = React.createRef();
	let addPost = () => {
		props.addPost(getValueText.current.value)

	}
	let showPostChangetext = () => {
		props.addTextPost(getValueText.current.value)
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