import React from 'react'
import classes from "./MyPosts.module.css"
import Post from './Post/Post';


const MyPosts = () => {
	return (
		<div>
			My post
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<Post likes="123" message="Я тут " />
			<Post likes="12" message="Привіт ти як" />

		</div>


	)
}

export default MyPosts; 