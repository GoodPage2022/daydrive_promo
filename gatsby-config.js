/* eslint-disable  */
const path = require('path');
require('dotenv').config();

module.exports = {
	siteMetadata: {
		author: {
			name: 'Bla'
		}
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
				icon: 'src/images/promoImg.png'
			}
		},
		{
			resolve: 'gatsby-plugin-layout',
			options: {
				component: require.resolve('./src/components/layout.tsx')
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src`
			}
		},
		{
			resolve: '@fika/gatsby-source-cockpit',
			options: {
				token: 'f6d6fa96d90576f8ca7e921c422dde',
				baseUrl: 'http://157.230.99.45:4200', // (1
				locales: [],
				collections: [], // (3)
				singletons: [] // (4)
			}
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public|)/,
				stages: [ 'develop' ],
				options: {
					emitWarning: true,
					failOnError: true
				}
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
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
				}
			}
		},
		'gatsby-plugin-typescript',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet'
	]
};
