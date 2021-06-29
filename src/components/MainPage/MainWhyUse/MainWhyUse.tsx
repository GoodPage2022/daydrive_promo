import React from 'react';
import './MainWhyUse.scss';
import { useState } from 'react';
//components
import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Tabs, { TabHeader } from '../../Tabs/Tabs';
import { mainAdvantageTabs } from '../../../constants/mainAdvantageTabs';
import { graphql, useStaticQuery } from 'gatsby';
import { MainAdvantageInfoTypes, usefullTabsType } from './Types';

const USEFULL_QUERY = graphql`
	query usefullQuery {
		allCockpitUsefullApp {
			edges {
				node {
					text {
						value
					}
					list {
						value
					}
					forUser {
						value
					}
				}
			}
		}
		allCockpitUsefullAppInfo {
			nodes {
				icon {
					value
				}
				text {
					value
				}
				id
			}
		}
	}
`;

const MainAdvantage = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [isTabForUser, setTabForUser] = useState<boolean>(true);
	const {
		allCockpitUsefullApp: { edges },
		allCockpitUsefullAppInfo: { nodes: MainAdvantageInfo },
	} = useStaticQuery(USEFULL_QUERY);

	console.log(MainAdvantageInfo);
	const mainAdvantagePoints: MainAdvantageInfoTypes[] = MainAdvantageInfo;
	const usefullTabs: usefullTabsType[] = edges;
	const Icon = mainAdvantageTabs[activeTab].icon;
	const actualArray = usefullTabs.filter(({ node: { forUser } }) => (isTabForUser ? forUser.value : !forUser.value));
	return (
		<section className="main-why-use" id="useful">
			<div className="main-why-use__wrapper">
				<Container>
					<SectionHeader>ЧЕМ ПОЛЕЗНО ПРИЛОЖЕНИЕ?</SectionHeader>
					<Tabs>
						<div className="tabs__header">
							{mainAdvantageTabs.map(({ id, title }) => (
								<TabHeader
									onItemClicked={() => {
										setTabForUser(title === 'Для пользователя');
										setActiveTab(id);
									}}
									isActive={activeTab === id}
									key={id}
								>
									{title}
								</TabHeader>
							))}
						</div>
						<div className="tabs__content">
							<div className="tabs__content-text" dangerouslySetInnerHTML={{ __html: actualArray[0].node.text.value }} />
							<div className="tabs__content-list" dangerouslySetInnerHTML={{ __html: actualArray[0].node.list.value }} />
						</div>
					</Tabs>
					<div className="main-why-use__svg">
						<Icon />
					</div>
				</Container>

				<div className="main-why-use__info">
					{mainAdvantagePoints.map(({ text, icon, id }) => (
						<div key={id} className="main-why-use__info-item">
							<div className="main-why-use__info-item-svg" dangerouslySetInnerHTML={{ __html: icon.value }} />
							<h5 dangerouslySetInnerHTML={{ __html: text.value }} className="main-why-use__info-item-title" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MainAdvantage;
