import React from 'react';
import './MainWhyUse.scss';
import { useState } from 'react';
//components
import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Tabs, { TabHeader } from '../../Tabs/Tabs';
import { mainAdvantageTabs } from '../../../constants/mainAdvantageTabs';
import Paragraph from '../../Paragraph/Paragraph';
import { mainAdvantageInfo } from '../../../constants/mainAdvantageInfo';

const MainAdvantage = () => {
	const [activeTab, setActiveTab] = useState(0);

	const Icon = mainAdvantageTabs[activeTab].icon;
	return (
		<section className="main-why-use">
			<div className="main-why-use__wrapper">
				<Container>
					<SectionHeader>ЧЕМ ПОЛЕЗНО ПРИЛОЖЕНИЕ?</SectionHeader>
					<Tabs>
						<div className="tabs__header">
							{mainAdvantageTabs.map(({ id, title }) => (
								<TabHeader onItemClicked={() => setActiveTab(id)} isActive={activeTab === id} key={id}>
									{title}
								</TabHeader>
							))}
						</div>
						<div className="tabs__content">
							<Paragraph>{mainAdvantageTabs[activeTab].content}</Paragraph>
							<ul className="tabs__content-list">
								{mainAdvantageTabs[activeTab].contentList.map((item) => (
									<li className="tabs__content-list-item" key={item.id}>
										{item.text}
									</li>
								))}
							</ul>
						</div>
					</Tabs>
					<div className="main-advantage__svg">
						<Icon />
					</div>
				</Container>

				<div className="main-why-use__info">
					{mainAdvantageInfo.map(({ id, title, icon: Icon }) => (
						<div key={id} className="main-why-use__info-item">
							<div className="main-why-use__info-item-svg">
								<Icon />
							</div>
							<h5 dangerouslySetInnerHTML={{ __html: title }} className="main-why-use__info-item-title" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MainAdvantage;
