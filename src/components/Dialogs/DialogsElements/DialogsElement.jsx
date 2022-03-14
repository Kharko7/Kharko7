import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsElement.module.css"


const DialogsElements = (props) => {
	const getActiveClass = (dataBase) => `${classes.dialogs__link} ${dataBase.isActive ? classes.active : ''}`;
	const getDialogsElements = props.dialogsData.map((dialogs) => <li key={dialogs.id}><NavLink to={'/dialogs' + dialogs.id} className={getActiveClass}>{dialogs.name}</NavLink></li>)
	return (
		<ul className={classes.dialogs__list}>
			{/* {props.dialogsData.map((dialogs) =>
				<li key={dialogs.id}>
					<NavLink to={dialogs.id} className={getActiveClass}>{dialogs.name}</NavLink>
				</li>)} */}
			{getDialogsElements}
		</ul>
	)
}




export default DialogsElements;





