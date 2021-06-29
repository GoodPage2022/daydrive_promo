import React from 'react';
import MainAbout from '../components/MainPage/MainAbout/MainAbout';
import MainAdvantages from '../components/MainPage/MainAdvantages/MainAdvantages';
// import MainAboutMain from '../components/MainPage/MainAboutMain/MainAboutMain';
import MainWhyUse from '../components/MainPage/MainWhyUse/MainWhyUse';
import MainStart from '../components/MainPage/MainStart/MainStart';
import MainFaq from '../components/MainPage/MainFaq/MainFaq';
import MainMobileDecision from '../components/MainPage/MainMobileDecision/MainMobileDecision';
import MainPromo from '../components/MainPage/MainPromo/MainPromo';
import MainForm from '../components/MainPage/MainForm/MainForm';

const IndexPage: React.FC = (): JSX.Element => {
	return (
		<>
			<MainPromo />
			<MainAbout />
			{/* <MainAboutMain /> */}
			<MainAdvantages />
			<MainWhyUse />
			<MainStart />
			<MainFaq />
			<MainMobileDecision />
			<MainForm />
		</>
	);
};

export default IndexPage;
