const path = require('path');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: `Jordi — Frontend Developer`,
		description: `Jordi Hermoso's portfolio website`,
		author: `Jordi Hermoso`
	},
	plugins: [
		`gatsby-plugin-typescript`, // This allows typescript
		`gatsby-plugin-emotion`,
		{
			resolve: 'gatsby-plugin-chakra-ui',
			options: {
				isResettingCSS: true, // optional, default to true
				isUsingColorMode: true // optional, default to true
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-chakra-ui',
			options: {
				/**
				 * @property {boolean} [isResettingCSS=true]
				 * if false, this plugin will not use `<CSSReset />
				 */
				isResettingCSS: true,
				/**
				 * @property {boolean} [isUsingColorMode=true]
				 * if false, this plugin will not use <ColorModeProvider />
				 */
				isUsingColorMode: true
			}
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GitHub',
				fieldName: 'github',
				url: 'https://api.github.com/graphql',
				headers: {
					Authorization: `bearer ${process.env.GITHUB_TOKEN}`
				},
				fetchOptions: {}
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `portfolio-images`,
				path: `./static/`
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-145106492-1'
			}
		} // {
		// 	// PROPERLY CONFIGURE THIS LATER FOR PWA
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Jordi Hermoso`,
		// 		short_name: `Jordi`,
		// 		start_url: `/`,
		// 		background_color: `#f7f0eb`,
		// 		theme_color: `#a2466c`,
		// 		display: `standalone`
		// 	}
		// }
		// `gatsby-plugin-offline`
	]
};

// This was a test... to install run `yarn add gatsby-plugin-typography react-typography typography`
// {
// 	resolve: `gatsby-plugin-typography`,
// 	options: {
// 		pathToConfigModule: `src/utils/typography`
// 	}
// }
