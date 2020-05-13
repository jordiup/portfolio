module.exports = {
	siteMetadata: {
		title: `Jordi Hermoso`,
		description: `Jordi Hermoso's portfolio website`,
		author: `Jordi Hermoso`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-chakra-ui',
			options: {
				isResettingCSS: true, // optional, default to true
				isUsingColorMode: true // optional, default to true
			}
		},
		`gatsby-plugin-typescript`, // This allows typescript
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
		}
	]
};

// This was a test... to install run `yarn add gatsby-plugin-typography react-typography typography`
// {
// 	resolve: `gatsby-plugin-typography`,
// 	options: {
// 		pathToConfigModule: `src/utils/typography`
// 	}
// }
