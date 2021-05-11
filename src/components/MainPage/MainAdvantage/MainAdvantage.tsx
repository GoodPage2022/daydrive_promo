import React from 'react';
import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Tabs, { TabHeader } from '../../Tabs/Tabs';
import './MainAdvantage.scss';
import { mainAdvantageTabs } from '../../../constants/mainAdvantageTabs';
import { useState } from 'react';
import Paragraph from '../../Paragraph/Paragraph';
import MainAdvantageSVG from '../../../images/svg/mainPage/mainAdvantage/mainAdvantage.inline.svg';
import { mainAdvantageInfo } from '../../../constants/mainAdvantageInfo';

const MainAdvantage = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<section className="main-advantage">
			<div className="main-advantage__wrapper">
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
						<MainAdvantageSVG />
					</div>
				</Container>

				<div className="main-advantage__info">
					{mainAdvantageInfo.map(({ id, title, icon: Icon }) => (
						<div key={id} className="main-advantage__info-item">
							<div className="main-advantage__info-item-svg">
								<Icon />
							</div>
							<h5 dangerouslySetInnerHTML={{ __html: title }} className="main-advantage__info-item-title" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MainAdvantage;
