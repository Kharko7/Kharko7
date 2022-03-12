import React from 'react'

import classes from "./NavBar.module.css"
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';



const NavBar = ({ links }) => {
	const getIsActiveClass = ({ isActive }) => `${classes.nav__link} ${isActive ? classes.active : ''}`;
	// const {isActive} = navData;


	return (
		<nav className={classes.nav}>
			<ul className={classes.nav__list}>
				{links.map(({ to, content }) => <li key={to}><NavLink to={to} className={getIsActiveClass}>{content}</NavLink></li>)}
				{/*	
				 <li>
				 	<NavLink to="/profile" className={getIsActiveClass}>Profile</NavLink>
				 </li>
				 <li>
				 	<NavLink to="/dialogs" className={getIsActiveClass}>Message</NavLink>
				 </li>
				 <li><NavLink to="/news" className={getIsActiveClass}>News</NavLink></li>
				 <li><NavLink to="music" className={getIsActiveClass}>Music</NavLink></li> */}
			</ul>
			<div className={classes.button}>
				<a href="#">Натисни</a>
			</div>

		</nav >
	)
}



export default NavBar;


// const { isActive } = navData;
// const isActive = navData.isActive