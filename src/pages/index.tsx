import React from 'react';
import MainAbout from '../components/MainPage/MainAbout/MainAbout';
import MainPromo from '../components/MainPage/MainPromo/MainPromo';

const IndexPage: React.FC = (): JSX.Element => {
	return (
		<>
			<MainPromo />
			<MainAbout />
		</>
	);
};

export default IndexPage;
