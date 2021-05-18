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
