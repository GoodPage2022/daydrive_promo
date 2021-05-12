import React from 'react';
import MainAbout from '../components/MainPage/MainAbout/MainAbout';
import MainAdvantages from '../components/MainPage/MainAdvantages/MainAdvantages';
import MainAboutMain from '../components/MainPage/MainAboutMain/MainAboutMain';
import MainAdvantage from '../components/MainPage/MainAdvantage/MainAdvantage';
import MainPromo from '../components/MainPage/MainPromo/MainPromo';

const IndexPage: React.FC = (): JSX.Element => {
	return (
		<>
			<MainPromo />
			<MainAbout />
			<MainAdvantages />
			<MainAboutMain />
			<MainAdvantage />
		</>
	);
};

export default IndexPage;
