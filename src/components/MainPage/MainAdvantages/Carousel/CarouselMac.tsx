import React, { useEffect, useState } from 'react';
import NextArrowSVG from '../../../../images/svg/mainPage/arrowNext.inline.svg';
import PrevArrowSVG from '../../../../images/svg/mainPage/arrowPrev.inline.svg';
import Image from 'gatsby-image';
import Carousel from '../../../Carousel/Carousel';
import Paragraph from '../../../Paragraph/Paragraph';
import { CarouselProps } from './Types';
import { chunk } from '../../../../helpers/chunk';
import { QueryTypes } from '../Types';

const CarouselMobile: React.FC<CarouselProps> = ({ items }) => {
	const [initialSlide, setInitialSlide] = useState<number>(0);

	useEffect(() => {
		const query = typeof window !== 'undefined' && window.location.search.split('=')[1];
		switch (query) {
			case QueryTypes.Fine:
			case QueryTypes.Fuel:
				setInitialSlide(0);
				break;
			case QueryTypes.Tickets:
			case QueryTypes.Notebook:
				setInitialSlide(1);
				break;
			case QueryTypes.Vin:
			case QueryTypes.Insurance:
				setInitialSlide(2);
				break;
			case QueryTypes.Check:
				setInitialSlide(3);
				break;
			default:
				setInitialSlide(0);
		}
	}, []);

	return (
		<div className="main-advantages__carousel--mac">
			<Carousel withDots buttonPrev={<PrevArrowSVG />} buttonNext={<NextArrowSVG />} initialSlide={initialSlide}>
				{chunk(items, 2).map((arr, i) => (
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

export default CarouselMobile;
