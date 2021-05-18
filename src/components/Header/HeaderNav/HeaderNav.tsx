import React from 'react';
import './HeaderNav.scss';
import { nav } from '../../../constants/nav';

const HeaderNav: React.FC = () => {
	return (
		<nav className="header__nav">
			{nav.map(({ id, title, href }) => (
				<a key={id} className="header__nav-link" href={href}>
					{title}
				</a>
			))}
		</nav>
	);
};

export default HeaderNav;
