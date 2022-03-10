import React from 'react'

import classes from "./NavBar.module.css"
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const NavBar = (props) => {
	const navDataa = (navData) => navData.isActive ? classes.active : ''
	return (
		<nav className={classes.nav}>
			<ul className={classes.nav__list}>
				<li>
					<NavLink to="/profile" className={classNames(classes.nav__link)}>Profile</NavLink>
				</li>
				<li>
					<NavLink to="/dialogs" className={classes.nav__link}>Message</NavLink>
				</li>
				<li><NavLink to="/news" className={classes.nav__link}>News</NavLink></li>
				<li><NavLink to="music" className={classes.nav__link}>Music</NavLink></li>
			</ul>
			<div className={classes.button}>
				<a href="#">Натисни</a>
			</div>

		</nav >
	)
}



export default NavBar; 