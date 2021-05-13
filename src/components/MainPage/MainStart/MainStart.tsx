import React, { useState } from 'react';
import { mainStartTabs } from '../../../constants/mainStartTabs';
import './MainStart.scss';
import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Tabs, { TabHeader } from '../../Tabs/Tabs';
import MainStartTabItem from './MainStartTabItem';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const HOW_START_IMG_QUERY = graphql`
	query howStartImgQuery {
		file(relativePath: { regex: "/howToStart.png$/" }) {
			id
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const MainStart: React.FC = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(HOW_START_IMG_QUERY);
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className="main-start">
			<Container>
				<SectionHeader>как начать работу с приложением</SectionHeader>
				<Tabs>
					<div className="tabs__header">
						{mainStartTabs.map(({ id, title }) => (
							<TabHeader key={id} onItemClicked={() => setActiveTab(id)} isActive={activeTab === id}>
								{title}
							</TabHeader>
						))}
					</div>
					<div className="tabs__content">
						<div className="main-start__img-wrapper">
							<Image fluid={fluid} className="main-start__img-desktop" />
						</div>
						<div className="tabs__content-list">
							{mainStartTabs[activeTab].itemsList.map(({ itemId, itemDesc, itemTitle }, i) => (
								<MainStartTabItem key={itemId} count={i + 1} desc={itemDesc} title={itemTitle} />
							))}
						</div>
					</div>
				</Tabs>
			</Container>
			<Image fluid={fluid} className="main-start__img" />
		</div>
	);
};

export default MainStart;
