import React from 'react';
import './BurgerMenu.scss';
//components
import { nav } from '../../../constants/nav';
//svg
import CircleSVG from '../../../images/svg/menu/circle.inline.svg';
import Circle1SVG from '../../../images/svg/menu//circle1.inline.svg';
//types
import { BurgerMenuProps } from './Types';

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isMenuOpen, handleMenu }) => {
	return (
		<div className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
			<div className="menu__wrapper">
				<CircleSVG className="menu__svg menu__svg--first" />
				<Circle1SVG className="menu__svg menu__svg--second" />
				<div className="menu__inner">
					<nav className="menu__nav">
						{nav.map(({ id, title, href }) => (
							<a className="menu__nav-link" key={id} href={href} onClick={handleMenu}>
								{title}
							</a>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
