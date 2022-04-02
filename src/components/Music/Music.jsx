import React from "react";
import Hook from "./Hooks/Hook";
import classes from "./Music.module.css"

const Music = (props) => {
	return (
		<div className={classes.music}>
			<Hook />
		</div>
	)
}

export default Music;