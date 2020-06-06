import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box, Link, Heading, Icon, useColorMode } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { Section } from './section';
import { GradientHeading } from './gradientHeading';
// import starIcon from 'Static/icons/star.svg'
// import forkIcon from 'Static/icons/fork.svg'
// import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Grid = styled(Box)`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`;

export const GridItem = styled(Link)`
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.13);
	transition: all 0.2s ease;

	&:hover {
		transform: scale(1.02);
	}

	/* h4 {
		color: #212121;
	} */

	/* p {
		color: #707070;
	} */
`;

const Content = styled(Box)`
	padding: 1rem 0;
`;

const Stats = styled(Box)`
	display: flex;
	align-items: center;

	div {
		display: flex;
		&:first-of-type {
			margin-right: 0.5rem;
		}

		span {
			/* color: #000; */
			margin-left: 0.5rem;
		}
	}
`;

export const GithubProjects = () => {
	// const { ...rest } = props;
	const { colorMode } = useColorMode();

	const {
		github: {
			user: {
				pinnedItems: { edges }
			}
		}
	} = useStaticQuery(graphql`
		{
			github {
				user(login: "jordiup") {
					pinnedItems(first: 6, types: [REPOSITORY, GIST]) {
						totalCount
						edges {
							node {
								... on GitHub_Repository {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
								}
							}
						}
					}
				}
			}
		}
	`);

	console.log(edges);

	return (
		<Section id="projects">
			<GradientHeading size="md" mb={5}>
				Some of my projects
				{/* <Link href="https://github.com/jordiup">Projects</Link> */}
			</GradientHeading>
			<Grid>
				{edges.map(({ node }) => (
					<GridItem
						key={node.id}
						href={node.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Box p={3}>
							<Content>
								<Heading as="h4" size="sm">
									{node.name}
								</Heading>
								<p>{node.description}</p>
							</Content>
							<Stats>
								<div>
									<Icon name="star" alt="star" color="red" />
									{/* <img src={starIcon} alt="stars" /> */}
									<span>{node.stargazers.totalCount}</span>
								</div>
								<div>
									<Icon name="gitFork" alt="forks" color="purple" />
									<span>{node.forkCount}</span>
								</div>
							</Stats>
						</Box>
					</GridItem>
				))}
			</Grid>
		</Section>
	);
};
