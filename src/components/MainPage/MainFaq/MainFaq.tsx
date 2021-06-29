import React, { useState } from 'react';
import './MainFaq.scss';
//components
import { mainFaqTabs } from '../../../constants/mainFaqTabs';
import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Tabs, { TabHeader } from '../../Tabs/Tabs';
import { graphql, useStaticQuery } from 'gatsby';
import { faqTypesFaq } from './Types';

const FAQ_QUERY = graphql`
	query faqQuery {
		allCockpitFaq {
			edges {
				node {
					text {
						value
					}
					title {
						value
					}
					forUser {
						value
					}
				}
			}
		}
	}
`;

const MainFaq: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
	const [isTabForUser, setTabForUser] = useState<boolean>(true);

	const {
		allCockpitFaq: { edges },
	} = useStaticQuery(FAQ_QUERY);
	const faqTabs: faqTypesFaq[] = edges;

	return (
		<div className="main-faq" id="faq">
			<Container>
				<SectionHeader>частые вопросы</SectionHeader>
				<Tabs>
					<div className="tabs__header">
						{mainFaqTabs.map(({ id, title }) => (
							<TabHeader
								key={id}
								onItemClicked={() => {
									setActiveTab(id);
									setActiveQuestion(null);
									setTabForUser(title === 'Для пользователя');
								}}
								isActive={activeTab === id}
							>
								{title}
							</TabHeader>
						))}
					</div>
					<div className="tabs__content">
						{faqTabs
							.filter(({ node: { forUser } }) => (isTabForUser ? forUser.value : !forUser.value))
							.map(({ node: { text, title } }, i) => (
								<div
									key={i}
									className={`tabs__content-item ${activeQuestion === i ? 'tabs__content-item--active' : ''}`}
									onClick={() => setActiveQuestion(activeQuestion === i ? null : i)}
								>
									<div className="tabs__content-item-toggler-wrapper">
										<div className="tabs__content-item-toggler"></div>
										<p className="tabs__content-item-title">{title.value}</p>
									</div>
									<div
										className={`tabs__content-item-text ${activeQuestion === i ? 'tabs__content-item-text--active' : ''}`}
										dangerouslySetInnerHTML={{ __html: text.value }}
									/>
								</div>
							))}
					</div>
				</Tabs>
			</Container>
		</div>
	);
};

export default MainFaq;
