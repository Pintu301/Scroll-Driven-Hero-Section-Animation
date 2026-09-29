import React from 'react'

export default function Header() {
	return (
		<header className="site-header flex items-center justify-between">
			<a className="brand" href="#home" aria-label="ITZFIZZ home">ITZFIZZ</a>
			<nav aria-label="Primary navigation">
				<a href="#home">HOME</a>
				<a href="#about">ABOUT</a>
				<a href="#features">FEATURES</a>
				<a href="#contact">CONTACT</a>
			</nav>
		</header>
	)
}
