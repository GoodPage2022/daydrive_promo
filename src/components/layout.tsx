import React from 'react';
import Header from './Header/Header';
import './layout.scss';

const Layout: React.FC = ({ children }): JSX.Element => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
