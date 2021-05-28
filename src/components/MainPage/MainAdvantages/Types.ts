import { FluidObject } from 'gatsby-image';

export type AdvatagesItemsType = {
	itemImg: {
		value: {
			childImageSharp: {
				fluid: FluidObject;
			};
		};
	};
	itemSubTitle: { value: string };
	itemText: { value: string };
	itemTitle: { value: string };
};
