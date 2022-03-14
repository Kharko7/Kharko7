import React from 'react'
import classes from "./Messages.module.css"



const Messages = (props) => {
	let getValueText = React.createRef();
	let showMessage = () => {
		console.log(getValueText.current.value)
	}

	let showMessageDialog = () => {
		props.showMessageDialog(getValueText.current.value)
		console.log(getValueText.current.value);

	}
	const messagesElements = props.messagesData.map((m) => <div key={m.message} className={classes.message}>{m.message}</div>);
	return (
		<div className={classes.messages}>
			{messagesElements}
			<div>
				<textarea onChange={showMessageDialog} value={props.messageTextDate.texareaValue} ref={getValueText} />
				<button onClick={showMessage}>Send</button>
			</div>
		</div>

	)
}

export default Messages