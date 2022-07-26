import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './layout.scss';

const Layout: React.FC = ({ children }): JSX.Element => {
	return (
		<>
			<Helmet title={'DayDrive | Мобільне рішення для Вашого авто'} />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
