import React from 'react';
import MainAboutMain from '../components/MainPage/MainAboutMain/MainAboutMain';
import MainAdvantage from '../components/MainPage/MainAdvantage/MainAdvantage';
import MainMobileDecision from '../components/MainPage/MainMobileDecision/MainMobileDecision';
import MainPromo from '../components/MainPage/MainPromo/MainPromo';
import MainForm from '../components/MainPage/MainForm/MainForm';

const IndexPage: React.FC = (): JSX.Element => {
	return (
		<>
			<MainPromo />
			<MainAboutMain />
			<MainAdvantage />
			<MainMobileDecision />
			<MainForm />
		</>
	);
};

export default IndexPage;
