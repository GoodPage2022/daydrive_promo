import React from 'react';
import './MainStartTabItem.scss';
import Paragraph from '../../Paragraph/Paragraph';
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
			<Paragraph>{desc}</Paragraph>
		</div>
	);
};

export default MainStartTabItem;
