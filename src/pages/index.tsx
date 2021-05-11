import React from 'react';
import MainAboutMain from '../components/MainPage/MainAboutMain/MainAboutMain';
import MainAdvantage from '../components/MainPage/MainAdvantage/MainAdvantage';
import MainPromo from '../components/MainPage/MainPromo/MainPromo';

const IndexPage: React.FC = (): JSX.Element => {
	return (
		<>
			<MainPromo />
			<MainAboutMain />
			<MainAdvantage />
		</>
	);
};

export default IndexPage;
