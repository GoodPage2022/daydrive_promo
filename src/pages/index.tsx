import React from 'react';
import MainAbout from '../components/MainPage/MainAbout/MainAbout';
import MainAdvantages from '../components/MainPage/MainAdvantages/MainAdvantages';
import MainAboutMain from '../components/MainPage/MainAboutMain/MainAboutMain';
import MainWhyUse from '../components/MainPage/MainWhyUse/MainWhyUse';
import MainPromo from '../components/MainPage/MainPromo/MainPromo';
import MainStart from '../components/MainPage/MainStart/MainStart';
import MainFaq from '../components/MainPage/MainFaq/MainFaq';

const IndexPage: React.FC = (): JSX.Element => {
	return (
		<>
			<MainPromo />
			<MainAbout />
			<MainAboutMain />
			<MainAdvantages />
			<MainWhyUse />
			<MainStart />
			<MainFaq />
		</>
	);
};

export default IndexPage;
