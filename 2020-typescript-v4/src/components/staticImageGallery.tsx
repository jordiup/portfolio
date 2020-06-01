/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Image, Flex, Box } from '@chakra-ui/core';
import { CenteredSpinner } from './centeredSpinner';
import Img from "gatsby-image";

export const StaticImageGallery = ({
	relativeDirectory
}: {
	relativeDirectory: string;
}) => {
	console.log(relativeDirectory);

	const {
		allFile: { edges: edges }
	} = useStaticQuery(graphql`
		{
			allFile(
				filter: {
					extension: { regex: "/(jpg)|(jpeg)|(png)/" }
					relativeDirectory: {
						in: ["portfolio/web", "portfolio/graphic-design"]
					}
				}
			) {
				edges {
					node {
						id
						name
						relativePath
						publicURL
						childImageSharp {
							# i.e. the max width of your container is 700 pixels.
							#
							# Other options include maxHeight (set both maxWidth and maxHeight to crop),
							# grayscale, duotone, rotate, etc.
							fluid (maxHeight: 200, quality: 100) {
								...GatsbyImageSharpFluid
								presentationWidth
										}
						}
					}
				}
			}
		}
	`);

	let edgesArr = Object.values(edges);

	// console.log(edges);
	console.log(edgesArr);

	return (
		<Flex flexWrap="nowrap" overflowX="scroll" justifyContent="spaceBetween" py={4}>
			{edgesArr.length > 0 ? (
				edgesArr.map((element, i) => {
					console.log(element.node.childImageSharp.fluid.presentationWidth + "px")
					return (
						// <Image
						// 	css={css`
						// 		box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px,
						// 			rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
						// 		cursor: pointer;
						// 		transition: all ease-in 0.1s;
						// 		&:hover {
						// 			transform: scale(1.03);
						// 		}
						// 	`}
						// 	key={i}
						// 	height="200px"
						// 	// rounded="5px"
						// 	mb={2}
						// 	mr={2}
						// 	// boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;"
						// 	// src={'./' + element.node.relativePath}
						// 	as={Img}
						// 	// fluid={element.node.childImageSharp.fluid}
						// />
						<Box
							key={i}
							height="200px"
							minWidth={element.node.childImageSharp.fluid.presentationWidth + "px"}
							mb={2}
							mr={2}
							// rounded="5px"
							css={css`
								box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px,
									rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
								cursor: pointer;
								transition: all ease-in 0.1s;
								&:hover {
									transform: scale(1.03);
								}
							`}
						// onClick=
						>
							<Img fluid={element.node.childImageSharp.fluid} key={i}
								imgStyle={{ height: "200px" }}
								style={{ height: "100%", width: "100%" }}
								placeholderStyle={{ height: "200px", width: 200 }}
							// imgStyle={{ height: "200px", display: "block", position: "relative" }}
							/>
						</Box>
					);
				})
			) : (
					<CenteredSpinner />
				)}
		</Flex>
	);
};
