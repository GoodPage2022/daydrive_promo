import React, { useState } from 'react';
import './Header.scss';
//components
import BurgerMenu from './BurgerMenu/BurgerMenu';
import HeaderNav from './HeaderNav/HeaderNav';
//svg
import LogoSVG from '../../images/svg/logo.inline.svg';

const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

	const handleMenu = () => {
		const body = document.querySelector('body');
		body.classList.toggle('fixed');
		setMenuOpen((prev) => !prev);
	};
	return (
		<header className="header">
			<LogoSVG className="header__logo" />

			<div className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`} onClick={handleMenu}>
				<span className="header__burger-line" />
			</div>
			<BurgerMenu isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
			<HeaderNav />
		</header>
	);
};

export default Header;
