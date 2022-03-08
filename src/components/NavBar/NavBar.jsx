import React from 'react'

import classes from "./NavBar.module.css"


const NavBar = () => {
	return (
		<nav className={classes.nav}>
			<ul className={classes.nav__list}>
				<li><a href="#" className={classes.nav__link}>Profile</a></li>
				<li><a href="#" className={classes.nav__link}>Message</a></li>
				<li><a href="#" className={classes.nav__link}>News</a></li>
				<li><a href="#" className={classes.nav__link}>Music</a></li>
			</ul>
			<div className={`${classes.button} ${classes._active}`}>
				<a href="#">Натисни</a>
			</div>

		</nav >
	)
}



export default NavBar; 