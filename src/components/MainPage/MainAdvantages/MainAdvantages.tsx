import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
//components
import SectionHeader from '../../SectionHeader/SectionHeader';
import CarouselMobile from './Carousel/CarouselMobile';
//helpers

import './MainAdvantages.scss';
import { AdvatagesItemsType } from './Types';
import CarouselMac from './Carousel/CarouselMac';
import CarouselDesktop from './Carousel/CarouselDesktop';

const ABOUT_ADVANTAGES_QUERY = graphql`
	query aboutAdvantagesQuery {
		cockpitMainPage {
			appAdvantages {
				value {
					itemImg {
						value {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					itemSubTitle {
						value
					}
					itemText {
						value
					}
					itemTitle {
						value
					}
				}
			}
		}
	}
`;

const MainAdvantages: React.FC = () => {
	const {
		cockpitMainPage: {
			appAdvantages: { value },
		},
	} = useStaticQuery(ABOUT_ADVANTAGES_QUERY);

	const advantagesItems: AdvatagesItemsType[] = value;

	return (
		<div className="main-advantages" id="howWork">
			<SectionHeader>Day Drive - это</SectionHeader>
			<CarouselMobile items={advantagesItems} />
			<CarouselMac items={advantagesItems} />
			<CarouselDesktop items={advantagesItems} />
		</div>
	);
};

export default MainAdvantages;
