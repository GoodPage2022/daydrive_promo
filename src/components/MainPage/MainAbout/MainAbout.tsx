import React, { Suspense, useState } from 'react';
import './MainAbout.scss';
//components
import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
//svg
import ArrowSVG from '../../../images/svg/mainPage/arrowMore.inline.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { AboutUsTextTypes } from './Types';

const Carousel = React.lazy(() => import('./Carousel'));

const ABOUT_US_QUERY = graphql`
	query aboutUsQuery {
		allCockpitMainPage {
			edges {
				node {
					aboutUsDesc {
						value
					}
					aboutUsTitle {
						value
					}
					aboutUsDescSecond {
						value
					}
				}
			}
		}
	}
`;

const MainAbout: React.FC = () => {
	const {
		allCockpitMainPage: { edges },
	} = useStaticQuery(ABOUT_US_QUERY);
	const AboutUsText: AboutUsTextTypes = edges[0].node;
	const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
	const handleDetails = () => {
		setDetailsOpen((prev) => !prev);
	};

	return (
		<section className="main-about-us" id="about">
			<Container>
				<SectionHeader>{AboutUsText.aboutUsTitle.value}</SectionHeader>
				<div className="main-about-us__wrapper">
					<div className="main-about-us__text" dangerouslySetInnerHTML={{ __html: AboutUsText.aboutUsDesc.value }} />
					<div
						className={`main-about-us__text ${detailsOpen ? 'main-about-us__text--open' : ''}`}
						dangerouslySetInnerHTML={{ __html: AboutUsText.aboutUsDescSecond.value }}
					/>
					<button className="main-about-us__btn-more" onClick={handleDetails}>
						подробнее <ArrowSVG className={`main-about-us__btn-svg ${detailsOpen ? 'main-about-us__btn-svg--open' : ''}`} />
					</button>
					{typeof window !== 'undefined' && (
						<Suspense fallback={<div />}>
							<Carousel />
						</Suspense>
					)}
				</div>
			</Container>
		</section>
	);
};

export default MainAbout;
