import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
// import { UseSite, api } from '../utils/api';

const animatedTextArray = () => {
	const arr = [
		'🌏',
		'🛫',
		'🌎',
		'🛬',
		'🌏',
		'🧑‍💻',
		'💻',
		'🌴',
		'🌞',
		'🌊',
		'✨',
		'🌈',
		'🔥'
	];

	let count = 0;

	return setInterval(() => {
		count++;
		if (count >= arr.length) {
			count = 0;
		}
		console.log(arr[count]);
		return arr[count];
	}, 500);
};

export const SEO = ({ description, lang, meta, title }) => {
	const { site } = useStaticQuery(
		graphql`
			{
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

	// const site = api.UseSite;

	const metaDescription = description || site.siteMetadata.description;

	console.log(site.siteMetadata);

	// var text = ['Welcome', 'Hi', 'Sup dude'];
	// var counter = 0;
	// var inst = setInterval(change, 1000);

	// function change() {
	// 	counter++;
	// 	if (counter >= text.length) {
	// 		counter = 0;
	// 		// clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
	// 	}
	// 	return text[counter];
	// }

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
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			<meta
				property="og:image"
				content="https://og-image.now.sh/**Jordi**%20Hermoso%20%3Cbr%3E%F0%9F%8C%8F.png?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=150&heights=150"
			/>
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="812" />
			<meta property="og:image:height" content="463" />
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
