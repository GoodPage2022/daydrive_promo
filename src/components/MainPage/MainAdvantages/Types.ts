/* eslint-disable no-unused-vars */
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

export enum QueryTypes {
	Fine = 'fine',
	Vin = 'vin',
	Tickets = 'tickets',
	Check = 'check',
	Notebook = 'notebook',
	Insurance = 'insurance',
	Fuel = 'fuel',
}
