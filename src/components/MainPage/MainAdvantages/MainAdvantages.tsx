import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { advantages } from '../../../constants/advantages';
import { imageArrayReplace } from '../../../helpers/images';
import SectionHeader from '../../SectionHeader/SectionHeader';
import CarouselDesktop from './Carousel/CarouselDesktop';
import CarouselMac from './Carousel/CarouselMac';
import CarouselMobile from './Carousel/CarouselMobile';

import './MainAdvantages.scss';

const MAIN_ADV_IMG_QUERY = graphql`
	query MainAdvImageQuery {
		allFile(filter: { relativePath: { regex: "/images/advantages/" } }) {
			nodes {
				absolutePath
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
				relativePath
				relativeDirectory
			}
		}
	}
`;

const MainAdvantages: React.FC = () => {
	const {
		allFile: { nodes },
	} = useStaticQuery(MAIN_ADV_IMG_QUERY);

	const items = imageArrayReplace(advantages, nodes);

	return (
		<div className="main-advantages">
			<SectionHeader>преимущества</SectionHeader>
			<CarouselMobile items={items} />
			<CarouselMac items={items} />
			<CarouselDesktop items={items} />
		</div>
	);
};

export default MainAdvantages;
