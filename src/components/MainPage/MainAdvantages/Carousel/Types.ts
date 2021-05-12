import { FluidObject } from 'gatsby-image';

export type CarouselProps = {
	items: ItemsTypes[];
};

type ItemsTypes = {
	itemCount: string;
	itemDesc: string;
	itemName: string;
	itemTitle: string;
	image: {
		childImageSharp: {
			fluid: FluidObject;
		};
	};
};
