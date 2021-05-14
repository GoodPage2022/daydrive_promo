import React, { useState } from 'react';
import './MainFaq.scss';
//components
import { mainFaqTabs } from '../../../constants/mainFaqTabs';
import Container from '../../Container/Container';
import Paragraph from '../../Paragraph/Paragraph';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Tabs, { TabHeader } from '../../Tabs/Tabs';

const MainFaq: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

	return (
		<div className="main-faq">
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
								}}
								isActive={activeTab === id}
							>
								{title}
							</TabHeader>
						))}
					</div>
					<div className="tabs__content">
						{mainFaqTabs[activeTab].faqList.map(({ id, faqQuestion, faqAnswer }, i) => (
							<div
								key={id}
								className={`tabs__content-item ${activeQuestion === i ? 'tabs__content-item--active' : ''}`}
								onClick={() => setActiveQuestion(activeQuestion === i ? null : i)}
							>
								<div className="tabs__content-item-toggler-wrapper">
									<div className="tabs__content-item-toggler"></div>
									<p className="tabs__content-item-title">{faqQuestion}</p>
								</div>
								<Paragraph>{faqAnswer}</Paragraph>
							</div>
						))}
					</div>
				</Tabs>
			</Container>
		</div>
	);
};

export default MainFaq;
