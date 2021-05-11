import React from 'react';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './MainAdvantages.scss';
import MainAdvCarousel from './MainAdvCarousel';

const MainAdvantages: React.FC = () => {
	return (
		<div className="main-advantages">
			<SectionHeader>преимущества</SectionHeader>
			<MainAdvCarousel />
		</div>
	);
};

export default MainAdvantages;
