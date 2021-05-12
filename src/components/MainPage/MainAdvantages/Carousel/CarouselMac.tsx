import React from 'react';
import NextArrowSVG from '../../../../images/svg/mainPage/arrowNext.inline.svg';
import PrevArrowSVG from '../../../../images/svg/mainPage/arrowPrev.inline.svg';
import Image from 'gatsby-image';
import Carousel from '../../../Carousel/Carousel';
import Paragraph from '../../../Paragraph/Paragraph';
import { CarouselProps } from './Types';
import { chunk } from '../../../../helpers/chunk';

const CarouselMobile: React.FC<CarouselProps> = ({ items }) => {
	return (
		<div className="main-advantages__carousel--mac">
			<Carousel withDots buttonPrev={<PrevArrowSVG />} buttonNext={<NextArrowSVG />}>
				{chunk(items, 2).map((arr) => (
					<div className="main-advantages__carousel-row" key={arr[0].itemCount}>
						{arr.map(({ itemCount, itemDesc, itemName, itemTitle, image: { childImageSharp: { fluid } } }) => (
							<div key={itemName} className="main-advantages__carousel-item-wrapper">
								<div className="main-advantages__carousel-item-info">
									<p className="main-advantages__carousel-item-info-name">{itemName}</p>
									<p className="main-advantages__carousel-item-info-count">{itemCount}</p>
								</div>
								<p className="main-advantages__carousel-item-title">{itemTitle}</p>
								<Paragraph>{itemDesc}</Paragraph>
								<Image className="main-advantages__carousel-item-img" fluid={fluid} />
							</div>
						))}
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default CarouselMobile;
