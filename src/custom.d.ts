declare module '*.svg' {
	const content: React.FC<ISVG>;
	export interface ISVG {
		className?: string;
	}
	export default content;
}
