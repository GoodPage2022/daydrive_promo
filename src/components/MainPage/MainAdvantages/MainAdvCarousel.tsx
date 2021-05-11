import React from 'react';
import './MainAdvantages.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { advantages } from '../../../constants/advantages';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Paragraph from '../../Paragraph/Paragraph';

const MAIN_ADV_IMG_QUERY = graphql`
	query mainAdvImgQuery {
		file(relativePath: { regex: "/fine.png$/" }) {
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
	},
};

const MainAdvCarousel: React.FC = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(MAIN_ADV_IMG_QUERY);

	return (
		<Carousel responsive={responsive} className="main-advantages__carousel">
			{advantages.map(({ itemCount, itemDesc, itemName, itemTitle }) => (
				<div key={itemName}>
					<div className="main-advantages__carousel-item-info">
						<p className="main-advantages__carousel-item-info-name">{itemName}</p>
						<p className="main-advantages__carousel-item-info-count">{itemCount}</p>
					</div>
					<p className="main-advantages__carousel-item-title">{itemTitle}</p>
					<Paragraph>{itemDesc}</Paragraph>
					<Image className="main-advantages__carousel-item-img" fluid={fluid} />
				</div>
			))}
		</Carousel>
	);
};

export default MainAdvCarousel;
