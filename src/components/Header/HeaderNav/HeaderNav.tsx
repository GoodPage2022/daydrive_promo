import React from 'react';
import { nav } from '../../../constants/nav';
import './HeaderNav.scss';

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
