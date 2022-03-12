import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"
import DialogsElements from "./DialogsElements/DialogsElement";
import Messages from "./Messages/Messages";



const Dialogs = (props) => {

	return (
		<div className={classes.dialogs}>
			<DialogsElements dialogsData={props.states.dialogsData} />
			<Messages messagesData={props.states.messagesData} />
		</div>
	)
}

export default Dialogs;





