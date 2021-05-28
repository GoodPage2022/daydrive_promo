import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

import { MainAboutQueryTypes } from './Types';
import Image from 'gatsby-image';
import NextArrowSVG from '../../../images/svg/mainPage/arrowNext.inline.svg';
import PrevArrowSVG from '../../../images/svg/mainPage/arrowPrev.inline.svg';

const MAIN_ABOUT_US_QUERY = graphql`
	query MainAboutUsQueryTry {
		allFile(filter: { relativePath: { regex: "/images/mainAboutUs/" } }) {
			nodes {
				absolutePath
				childImageSharp {
					fluid(maxWidth: 4096, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
				relativePath
				relativeDirectory
			}
		}
	}
`;

const TryCarousel = () => {
	const [slide, goToSlide] = useState(0);
	const {
		allFile: { nodes },
	}: MainAboutQueryTypes = useStaticQuery(MAIN_ABOUT_US_QUERY);

	const slides = [
		{
			key: '0',
			content: <Image imgStyle={{ objectFit: 'contain' }} fluid={nodes[3].childImageSharp.fluid} alt="1" />,
		},
		{
			key: '1',
			content: <Image imgStyle={{ objectFit: 'contain' }} fluid={nodes[0].childImageSharp.fluid} alt="2" />,
		},
		{
			key: '2',
			content: <Image imgStyle={{ objectFit: 'contain' }} fluid={nodes[1].childImageSharp.fluid} alt="3" />,
		},
		{
			key: '3',
			content: <Image imgStyle={{ objectFit: 'contain' }} fluid={nodes[2].childImageSharp.fluid} alt="1" />,
		},
	].map((slide, idx) => {
		return {
			...slide,
			onClick: () => {
				goToSlide(idx);
			},
		};
	});

	let xDown: any = null;
	let yDown: any = null;

	const getTouches = (evt: any) => {
		return evt.touches || evt.originalEvent.touches;
	};

	const handleTouchStart = (evt: any) => {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	};

	const handleTouchMove = (evt: any) => {
		if (!xDown || !yDown) {
			return;
		}

		const xUp = evt.touches[0].clientX;
		const yUp = evt.touches[0].clientY;

		const xDiff = xDown - xUp;
		const yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0) {
				/* left swipe */
				goToSlide((prev) => prev + 1);
			} else {
				/* right swipe */
				goToSlide((prev) => prev - 1);
			}
		}
		xDown = null;
		yDown = null;
	};
	return (
		<div className="carousel-about" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
			{typeof window !== 'undefined' && (
				<Carousel slides={slides} goToSlide={slide} animationConfig={config.gentle} offsetRadius={1} showNavigation={false} />
			)}
			<div className="carousel-about__arrows">
				<div onClick={() => goToSlide((prev) => prev - 1)}>
					<PrevArrowSVG />
				</div>
				<div onClick={() => goToSlide((prev) => prev + 1)}>
					<NextArrowSVG />
				</div>
			</div>
		</div>
	);
};

export default TryCarousel;
