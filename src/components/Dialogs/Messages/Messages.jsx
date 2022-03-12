import React from 'react'
import classes from "./Messages.module.css"


const Messages = (props) => {
	const messagesElements = props.messagesData.map((m) => <div key={m.message} className={classes.message}>{m.message}</div>);
	return (
		<div className={classes.messages}>
			{messagesElements}
		</div>

	)
}

export default Messages