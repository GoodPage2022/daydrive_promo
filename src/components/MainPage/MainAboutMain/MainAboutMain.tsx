import React from 'react';
import './MainAboutMain.scss';
//components
import Container from '../../Container/Container';
import Paragraph from '../../Paragraph/Paragraph';
import SectionHeader from '../../SectionHeader/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { AboutAppItemsType } from './Types';

const ABOUT_APP_QUERY = graphql`
	query aboutAppQuery {
		cockpitMainPage {
			aboutApp {
				value {
					itemTitle {
						type
						value
					}
					itemDesc {
						value
					}
					itemSvg {
						value
					}
				}
			}
		}
	}
`;

const MainAboutMain = () => {
	const {
		cockpitMainPage: {
			aboutApp: { value },
		},
	} = useStaticQuery(ABOUT_APP_QUERY);

	const AboutAppItems: AboutAppItemsType[] = value;

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
					{AboutAppItems.map(({ itemDesc, itemSvg, itemTitle }, i) => (
						<div key={i} className="main-about__list-item">
							<div className="main-about__list-item-svg" dangerouslySetInnerHTML={{ __html: itemSvg.value }}></div>
							<h4 dangerouslySetInnerHTML={{ __html: itemTitle.value }} className="main-about__list-item-title" />
							<span className="main-about__list-item-stroke" />
							<Paragraph>{itemDesc.value}</Paragraph>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default MainAboutMain;
