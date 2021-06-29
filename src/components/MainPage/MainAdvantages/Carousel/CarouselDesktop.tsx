import React from 'react';
import NextArrowSVG from '../../../../images/svg/mainPage/arrowNext.inline.svg';
import PrevArrowSVG from '../../../../images/svg/mainPage/arrowPrev.inline.svg';
import Image from 'gatsby-image';
import Carousel from '../../../Carousel/Carousel';
import Paragraph from '../../../Paragraph/Paragraph';
import { CarouselProps } from './Types';
import { chunk } from '../../../../helpers/chunk';

const CarouselDesktop: React.FC<CarouselProps> = ({ items }) => {
	return (
		<div className="main-advantages__carousel--desktop">
			<Carousel withDots buttonPrev={<PrevArrowSVG />} buttonNext={<NextArrowSVG />}>
				{chunk(items, 3).map((arr, i) => (
					<div className="main-advantages__carousel-row" key={i}>
						{arr.map(({ itemImg: { value: { childImageSharp: { fluid } } }, itemSubTitle, itemText, itemTitle }, i) => (
							<div key={i} className="main-advantages__carousel-item-wrapper">
								<div className="main-advantages__carousel-item-info">
									<p className="main-advantages__carousel-item-info-name">{itemTitle.value}</p>
									<p className="main-advantages__carousel-item-info-count">asdas</p>
								</div>
								<div className="main-advantages__carousel-item-title" dangerouslySetInnerHTML={{ __html: itemSubTitle.value }} />
								<Paragraph>{itemText.value}</Paragraph>
								<Image className="main-advantages__carousel-item-img" fluid={fluid} />
							</div>
						))}
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default CarouselDesktop;
