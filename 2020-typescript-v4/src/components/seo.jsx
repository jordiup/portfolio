import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({ description, lang, meta, title }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	console.log(site.siteMetadata);

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title || site.siteMetadata.title}
			titleTemplate={title ? `%s | ${site.siteMetadata.title}` : ``}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					property: `og:type`,
					content: `website`
				}
				// Note twitter tags have been removed, might want later
			].concat(meta)}
		>
			<link
				href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&display=swap"
				rel="stylesheet"
			></link>
		</Helmet>
	);
};

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired
};
