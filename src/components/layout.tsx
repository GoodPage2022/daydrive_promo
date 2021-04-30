import React from 'react';
import './layout.scss';
import Header from './Header/Header';

const Layout: React.FC = ({ children }): JSX.Element => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
