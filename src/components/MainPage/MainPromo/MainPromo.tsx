import React from 'react';
import './MainPromo.scss';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
//components
import Container from '../../Container/Container';
//svg
import AppleSVG from '../../../images/svg/mainPage/apple.inline.svg';
import PlaystoreSVG from '../../../images/svg/mainPage//playstore.inline.svg';

const MAIN_PROMO_IMG_QUERY = graphql`
	query promoImgQuery {
		file(relativePath: { regex: "/promoImg.png$/" }) {
			id
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const MainPromo: React.FC = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(MAIN_PROMO_IMG_QUERY);

	return (
		<section className="main-promo">
			<Container>
				<div className="main-promo__wrapper">
					<h4 className="main-promo__subtitle">больше чем приложение</h4>
					<h1 className="main-promo__title">мобильное решение для вашего авто</h1>
					<p className="main-promo__desc">
						Не следует, однако забывать, что консультация с широким активом требуют определения и уточнения модели развития
					</p>
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
			</Container>
			<Image className="main-promo__img" fluid={fluid} />
		</section>
	);
};

export default MainPromo;
