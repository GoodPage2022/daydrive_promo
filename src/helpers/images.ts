import { FluidObject } from 'gatsby-image';
interface IWithRelativePath {
	relativePath: string;
}

interface IImageQuery extends IWithRelativePath {
	childImageSharp: {
		fluid: FluidObject;
	};
}

interface IWithImage extends IWithRelativePath {
	image: IImageQuery;
}

export const imageArrayReplace = <T>(arr: (T & IWithRelativePath)[], queryRequest: IImageQuery[]): (T & IWithImage)[] => {
	const items = arr.map((item) => ({
		...item,
		image: queryRequest.find(({ relativePath }: { relativePath: string }) => relativePath === item.relativePath) as IImageQuery,
	}));
	return items;
};
