/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Image, Flex } from '@chakra-ui/core';
import { CenteredSpinner } from './centeredSpinner';

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
					}
				}
			}
		}
	`);

	let edgesArr = Object.values(edges);

	// console.log(edges);
	console.log(edgesArr);

	return (
		<Flex flexWrap="nowrap" overflowX="scroll" justifyContent="spaceBetween">
			{edgesArr.length > 0 ? (
				edgesArr.map((element, i) => {
					return (
						<Image
							css={css`
								box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px,
									rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
								cursor: pointer;
								transition: all ease-in 0.1s;
								&:hover {
									transform: scale(1.03);
								}
							`}
							key={i}
							height="200px"
							// rounded="5px"
							mb={2}
							mr={2}
							// boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;"
							src={'./' + element.node.relativePath}
						/>
					);
				})
			) : (
				<CenteredSpinner />
			)}
		</Flex>
	);
};
