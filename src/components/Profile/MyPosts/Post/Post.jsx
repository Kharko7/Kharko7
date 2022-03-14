import React from 'react'
import classes from "./Post.module.css"



// let showPostInfo = () => {
// 	let imgPost = <img src="https://v.od.ua/uploads/92/logo.png" />
// 	return postInfo.map((elem) => elem.message)


// }

const Post = (props) => {
	let imgPost = <img src="https://v.od.ua/uploads/92/logo.png" />
	let showPostInfo = props.profilePostData.map((elem) =>
		<div>
			{imgPost}
			{elem.message}
			{elem.likes}
		</div>)


	return (
		<div className={classes.post}>
			{showPostInfo}
		</div >
	)
}

export default Post; 