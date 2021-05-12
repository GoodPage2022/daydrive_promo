import React from 'react';
import Image from 'gatsby-image';
import Paragraph from '../../Paragraph/Paragraph';
import './MainMobileDecision.scss';
import AppleSVG from '../../../images/svg/mainPage/apple.inline.svg';
import PlaystoreSVG from '../../../images/svg/mainPage//playstore.inline.svg';
import { graphql, useStaticQuery } from 'gatsby';

const MOBILE_DECISION_IMAGE_QUERY = graphql`
	query decisionImageQuery {
		file(relativePath: { regex: "/decision.png$/" }) {
			id
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const MainMobileDecision = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(MOBILE_DECISION_IMAGE_QUERY);

	return (
		<section className="mobile-decision">
			<div className="mobile-decision__content">
				<h3 className="mobile-decision__content-subtitle">БОЛЬШЕ ЧЕМ ПРИЛОЖЕНИЕ</h3>
				<h2 className="mobile-decision__content-title">МОБИЛЬНОЕ РЕШЕНИЕ ДЛЯ ВАШЕГО АВТО</h2>
				<Paragraph>
					Не следует, однако забывать, что консультация с широким активом требуют определения и уточнения модели развития
				</Paragraph>
				<div className="main-promo__downloads">
					<a className="main-promo__downloads-link">
						<AppleSVG className="main-promo__downloads-link-svg" />
						<div>
							<p className="main-promo__downloads-link-text">Скачать в </p>
							<p className="main-promo__downloads-link-text">
								<strong>app store</strong>
							</p>
						</div>
					</a>
					<a className="main-promo__downloads-link">
						<PlaystoreSVG className="main-promo__downloads-link-svg" />
						<div>
							<p className="main-promo__downloads-link-text">Скачать в </p>
							<p className="main-promo__downloads-link-text">
								<strong>google play</strong>
							</p>
						</div>
					</a>
				</div>
			</div>
			<div className="mobile-decision__image-wrapper">
				<div className="mobile-decision__image-bg" />
				<div className="mobile-decision__image">
					<Image fluid={fluid}></Image>
				</div>
			</div>
		</section>
	);
};

export default MainMobileDecision;
