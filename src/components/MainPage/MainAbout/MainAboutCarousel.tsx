import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Image from 'gatsby-image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MainAboutCarousel.scss';

const MAIN_ABOUT_IMG_QUERY = graphql`
	query mainAboutImgQuery {
		file(relativePath: { regex: "/itemCarousel.png$/" }) {
			id
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		partialVisibilityGutter: 30,
	},
};

const MainAboutCarousel = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(MAIN_ABOUT_IMG_QUERY);

	return (
		<Carousel responsive={responsive} centerMode infinite>
			<Image fluid={fluid} />
			<Image fluid={fluid} />
			<Image fluid={fluid} />
		</Carousel>
	);
};

export default MainAboutCarousel;
