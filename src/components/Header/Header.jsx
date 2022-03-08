import React from 'react'

import classes from "./Header.module.css"
const Header = () => {
	return (
		<header className={classes.header}>
			<a className="header__logo " href="#">
				<img src="../img/logo.svg" />
			</a>

		</header>
	)
}

export default Header; 
