import React from 'react';
import './layout.scss';

const Layout: React.FC = ({ children }): JSX.Element => {
	return (
		<>
			<main>{children}</main>
		</>
	);
};

export default Layout;
