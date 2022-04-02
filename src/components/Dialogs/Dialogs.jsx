import React from "react";
import classes from "./Dialogs.module.css"
import DialogsElements from "./DialogsElements/DialogsElement";
import Messages from "./Messages/Messages";



const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<DialogsElements dialogsData={props.states.dialogsData} />
			<Messages dispatch={props.dispatch} messagesData={props.states.messagesData} messageTextDate={props.states.messageTextDate} showMessageDialog={props.showMessageDialog} />
		</div>
	)
}

export default Dialogs;





