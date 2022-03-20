import React from 'react'
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import MainImage from './MainImage/MainImage'

const Profile = (props) => {
	return (
		<div>
			<MainImage />
			<MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
		</div>
	)
}

export default Profile; 