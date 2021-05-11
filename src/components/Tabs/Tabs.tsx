import React from 'react';

import './Tabs.scss';

const Tabs: React.FC = ({ children }) => {
	return <div className="tabs">{children}</div>;
};
export default Tabs;

export const TabHeader: React.FC<ITabHeader> = ({ children, onItemClicked, isActive = false }) => {
	return (
		<div onClick={onItemClicked} className={isActive ? 'tab__title tab__title-active' : 'tab__title'}>
			{children}
		</div>
	);
};

interface ITabHeader {
	onItemClicked: () => void;
	isActive: boolean;
}
