import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
//components
import { advantages } from '../../../constants/advantages';
import SectionHeader from '../../SectionHeader/SectionHeader';
import CarouselDesktop from './Carousel/CarouselDesktop';
import CarouselMac from './Carousel/CarouselMac';
import CarouselMobile from './Carousel/CarouselMobile';
//helpers
import { imageArrayReplace } from '../../../helpers/images';

import './MainAdvantages.scss';

const MAIN_ADV_IMG_QUERY = graphql`
	query MainAdvImageQuery {
		allFile(filter: { relativePath: { regex: "/images/advantages/" } }) {
			nodes {
				absolutePath
				childImageSharp {
					fluid(maxWidth: 6000, quality: 100) {
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
		<div className="main-advantages" id="howWork">
			<SectionHeader>преимущества</SectionHeader>
			<CarouselMobile items={items} />
			<CarouselMac items={items} />
			<CarouselDesktop items={items} />
		</div>
	);
};

export default MainAdvantages;
