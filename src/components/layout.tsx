import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './layout.scss';

const Layout: React.FC = ({ children }): JSX.Element => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
