import React from 'react';
import MainAbout from '../components/MainPage/MainAbout/MainAbout';
import MainAdvantages from '../components/MainPage/MainAdvantages/MainAdvantages';
import MainPromo from '../components/MainPage/MainPromo/MainPromo';

const IndexPage: React.FC = (): JSX.Element => {
	return (
		<>
			<MainPromo />
			<MainAbout />
			<MainAdvantages />
		</>
	);
};

export default IndexPage;
