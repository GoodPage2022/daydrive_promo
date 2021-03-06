import React from 'react';
import './MainStartTabItem.scss';
import { MainStartTabItemsProps } from './Types';

const MainStartTabItem: React.FC<MainStartTabItemsProps> = ({ count, title, desc }) => {
	return (
		<div className="main-start__content-item">
			<div className="main-start__content-item-top">
				<div className="main-start__content-item-count">
					<p>{count}</p>
				</div>
				<p className="main-start__content-item-title">{title}</p>
			</div>
			{desc && <div className="main-start__content-item-text" dangerouslySetInnerHTML={{ __html: desc }} />}
		</div>
	);
};

export default MainStartTabItem;
