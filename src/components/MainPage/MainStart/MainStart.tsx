import React, { useState } from 'react';
import './MainStart.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
//components
import { mainStartTabs } from '../../../constants/mainStartTabs';
import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Tabs, { TabHeader } from '../../Tabs/Tabs';
import MainStartTabItem from './MainStartTabItem';
import { howToStartArrayType } from './Types';

const HOW_START_IMG_QUERY = graphql`
	query howStartImgQuery {
		file(relativePath: { regex: "/howToStart.png$/" }) {
			id
			childImageSharp {
				fluid(quality: 100, maxWidth: 4096) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		allCockpitHowStart {
			edges {
				node {
					forIphone {
						value
					}
					title {
						value
					}
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
		allCockpitHowStart: { edges },
	} = useStaticQuery(HOW_START_IMG_QUERY);
	const [activeTab, setActiveTab] = useState(0);
	const [isTabForIphone, setTabForIphone] = useState<boolean>(true);

	const howToStartArray: howToStartArrayType[] = edges;

	return (
		<div className="main-start">
			<Container>
				<SectionHeader>как начать работу с приложением</SectionHeader>
				<Tabs>
					<div className="tabs__header">
						{mainStartTabs.map(({ id, title }) => (
							<TabHeader
								key={id}
								onItemClicked={() => {
									setTabForIphone(title === 'iPhone');
									setActiveTab(id);
								}}
								isActive={activeTab === id}
							>
								{title}
							</TabHeader>
						))}
					</div>
					<div className="tabs__content">
						<div className="main-start__img-wrapper">
							<Image fluid={fluid} className="main-start__img-desktop" />
						</div>
						<div className="tabs__content-list">
							{howToStartArray
								.filter(({ node: { forIphone } }) => (isTabForIphone ? forIphone.value : !forIphone.value))
								.map(({ node: { title } }, i) => (
									<MainStartTabItem key={`${i}+${title}`} count={i + 1} title={title.value} />
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
