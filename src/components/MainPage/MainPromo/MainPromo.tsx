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
import { PromoQueryTypes } from './Types';

const MAIN_PROMO_IMG_QUERY = graphql`
	query promoImgQuery {
		file(relativePath: { regex: "/promoImg.png$/" }) {
			id
			childImageSharp {
				fluid(maxWidth: 6000, quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		allCockpitMainPage(filter: {lang: { eq: "ua" }}) {
			edges {
				node {
					promoDesc {
						value
					}
					promoSubTitle {
						value
					}
					promoTitle {
						value
					}
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
		allCockpitMainPage: { edges },
	} = useStaticQuery(MAIN_PROMO_IMG_QUERY);

	const PromoQueryText: PromoQueryTypes = edges[0].node;

	return (
		<section className="main-promo">
			<Container>
				<div className="main-promo__wrapper">
					<h4 className="main-promo__subtitle">{PromoQueryText.promoSubTitle.value}</h4>
					<h1 className="main-promo__title">{PromoQueryText.promoTitle.value}</h1>
					<p className="main-promo__desc">{PromoQueryText.promoDesc.value}</p>
					<div className="main-promo__downloads">
						<a className="main-promo__downloads-link" href='https://apps.apple.com/ru/app/daydrive/id1589477867' target='blank'>
							<AppleSVG className="main-promo__downloads-link-svg" />
							<div>
								<p className="main-promo__downloads-link-text">Завантажити в </p>
								<p className="main-promo__downloads-link-text">
									<strong>app store</strong>
								</p>
							</div>
						</a>
						<a className="main-promo__downloads-link" href='https://play.google.com/store/apps/details?id=com.goodpage.daydrive' target='blank'>
							<PlaystoreSVG className="main-promo__downloads-link-svg" />
							<div>
								<p className="main-promo__downloads-link-text">Завантажити в </p>
								<p className="main-promo__downloads-link-text">
									<strong>google play</strong>
								</p>
							</div>
						</a>
					</div>
				</div>
			</Container>
			<Image className="main-promo__img" fluid={fluid} loading="eager" />
		</section>
	);
};

export default MainPromo;
