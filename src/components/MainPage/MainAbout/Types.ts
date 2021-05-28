import { FluidObject } from 'gatsby-image';

export type MainAboutQueryTypes = {
	allFile: {
		nodes: NodesTypes[];
	};
};

type NodesTypes = {
	childImageSharp: {
		fluid: FluidObject;
	};
};

export type AboutUsTextTypes = {
	aboutUsDesc: { value: string };
	aboutUsDescSecond: { value: string };
	aboutUsTitle: { value: string };
};
