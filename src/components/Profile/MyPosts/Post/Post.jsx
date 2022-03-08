import React from 'react'
import classes from "./Post.module.css"

const Post = (props) => {



	return (
		<div className={classes.post}>
			<img src="https://v.od.ua/uploads/92/logo.png" />
			{props.message} {props.likes}
		</div>
	)
}

export default Post; 