import React from 'react';
import './MainAboutMain.scss';
//components
import { mainAboutMain } from '../../../constants/mainAboutMain';
import Container from '../../Container/Container';
import Paragraph from '../../Paragraph/Paragraph';
import SectionHeader from '../../SectionHeader/SectionHeader';

const MainAboutMain = () => {
	return (
		<section className="main-about">
			<Container>
				<SectionHeader>
					Главное о
					<span>
						<span> day drive</span>
					</span>
				</SectionHeader>
				<div className="main-about__list">
					{mainAboutMain.map(({ id, icon: Icon, title, text }) => (
						<div key={id} className="main-about__list-item">
							<div className="main-about__list-item-svg">
								<Icon />
							</div>
							<h4 dangerouslySetInnerHTML={{ __html: title }} className="main-about__list-item-title" />
							<span className="main-about__list-item-stroke" />
							<Paragraph>{text}</Paragraph>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default MainAboutMain;