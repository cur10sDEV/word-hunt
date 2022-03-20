import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher"
import "./Header.css"

const Header = ({bgColor}) => {
	return (
		<div className="header" style={{backgroundColor: `${bgColor}`}}>
			<h2 className="heading">Word Hunt</h2>
			<ThemeSwitcher />
		</div>
	)
}

export default Header;