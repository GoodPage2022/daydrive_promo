/* eslint-disable  */
const path = require('path');
require('dotenv').config();

module.exports = {
	siteMetadata: {
		author: {
			name: 'Bla',
		},
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#323232',
				theme_color: '#323232',
				display: 'minimal-ui',
				icon: 'assets/images/fav.png',
			},
		},
		{
			resolve: 'gatsby-plugin-layout',
			options: {
				component: require.resolve('./src/components/layout.tsx'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src`,
			},
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public|)/,
				stages: ['develop'],
				options: {
					emitWarning: true,
					failOnError: true,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\/assets\/.*.svg/,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				additionalData: (content, loaderContext) => {
					const { resourcePath, rootContext } = loaderContext;
					const relativePath = path.relative(rootContext, resourcePath);
					if (relativePath === 'src/styles/variables.scss') {
						return content;
					}

					return `@import "/src/styles/variables"; ${content}`;
				},
			},
		},
		'gatsby-plugin-typescript',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
	],
};
