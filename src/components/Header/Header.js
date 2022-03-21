import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher"
import "./Header.css"

const Header = ({onChange, theme}) => {
	return (
		<div className="header">
			<h2 className="heading">Word Hunt</h2>
			<ThemeSwitcher theme={theme} onChange={onChange}/>
		</div>
	)
}

export default Header;