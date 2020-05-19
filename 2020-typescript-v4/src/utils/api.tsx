import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const api = () => {
	const {
		site,
		github: {
			user: {
				pinnedItems: { edges }
			}
		}
	} = useStaticQuery(
		graphql`
			{
				site {
					siteMetadata {
						title
						description
						author
					}
				}
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
		`
	);

	const UseGithubEdges = () => edges;

	const UseSite = () => site;
};

// export const UseGithubEdges = () => edges;

// export const UseSite = () => site;
