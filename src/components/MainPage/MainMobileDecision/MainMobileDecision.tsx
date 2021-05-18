import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import './MainMobileDecision.scss';
//components
import Paragraph from '../../Paragraph/Paragraph';
//svg
import AppleSVG from '../../../images/svg/mainPage/apple.inline.svg';
import PlaystoreSVG from '../../../images/svg/mainPage//playstore.inline.svg';
import CircleSVG from '../../../images/svg/mainPage/mainMobileDecision/circle.inline.svg';
import Circle1SVG from '../../../images/svg/mainPage/mainMobileDecision/circle1.inline.svg';

const MOBILE_DECISION_IMAGE_QUERY = graphql`
	query decisionImageQuery {
		file(relativePath: { regex: "/decision.png$/" }) {
			id
			childImageSharp {
				fluid(quality: 100, maxWidth: 4096) {
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
		<section className="mobile-decision" id="download">
			<CircleSVG className="mobile-decision__svg mobile-decision__svg--first" />
			<Circle1SVG className="mobile-decision__svg mobile-decision__svg--second" />

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
					<Image imgStyle={{ objectFit: 'contain' }} fluid={fluid}></Image>
				</div>
			</div>
		</section>
	);
};

export default MainMobileDecision;