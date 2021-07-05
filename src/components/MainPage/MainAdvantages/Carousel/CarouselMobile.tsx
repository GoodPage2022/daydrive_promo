import React, { useEffect, useState } from 'react';
import NextArrowSVG from '../../../../images/svg/mainPage/arrowNext.inline.svg';
import PrevArrowSVG from '../../../../images/svg/mainPage/arrowPrev.inline.svg';
import Image from 'gatsby-image';
import Carousel from '../../../Carousel/Carousel';
import Paragraph from '../../../Paragraph/Paragraph';
import { CarouselProps } from './Types';
import { QueryTypes } from '../Types';

const CarouselMobile: React.FC<CarouselProps> = ({ items }) => {
	const [initialSlide, setInitialSlide] = useState<number>(0);

	useEffect(() => {
		const query = typeof window !== 'undefined' && window.location.search.split('=')[1];
		console.log('query', query);

		switch (query) {
			case QueryTypes.Fine:
				setInitialSlide(0);
				break;
			case QueryTypes.Fuel:
				setInitialSlide(1);
				break;
			case QueryTypes.Tickets:
				setInitialSlide(2);
				break;
			case QueryTypes.Notebook:
				setInitialSlide(3);
				break;
			case QueryTypes.Insurance:
				setInitialSlide(4);
				break;
			case QueryTypes.Vin:
				setInitialSlide(5);
				break;
			case QueryTypes.Check:
				setInitialSlide(6);
				break;
			default:
				setInitialSlide(0);
		}
	}, []);

	return (
		<div className="main-advantages__carousel--mobile">
			<Carousel withDots buttonPrev={<PrevArrowSVG />} buttonNext={<NextArrowSVG />} initialSlide={initialSlide}>
				{items.map(({ itemImg: { value: { childImageSharp: { fluid } } }, itemSubTitle, itemText, itemTitle }, i) => (
					<div key={i} className="main-advantages__carousel-item-wrapper">
						<div className="main-advantages__carousel-item-info">
							<p className="main-advantages__carousel-item-info-name">{itemTitle.value}</p>
							<p className="main-advantages__carousel-item-info-count">{`0${i + 1}/0${items.length}`}</p>
						</div>
						<div className="main-advantages__carousel-item-title" dangerouslySetInnerHTML={{ __html: itemSubTitle.value }} />
						<Paragraph>{itemText.value}</Paragraph>
						<Image className="main-advantages__carousel-item-img" fluid={fluid} />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default CarouselMobile;
