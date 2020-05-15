import { Box, Heading, Text } from '@chakra-ui/core';
import React from 'react';
import { ColourModeHookTester } from '../components/colourModeButton';
import { Header } from '../components/header';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { GithubProjects } from '../components/githubProjects';
import { GridPics } from '../components/gridPics';

const IndexPage = () => {
	return (
		<>
			<SEO />
			<Header />
			<Box p={5}>
				<GridPics />
				<Heading size="md" mb={5}>
					About
				</Heading>
				<Text>
					I'm a Frontend Developer specializing in React. I've just graduated
					with a Computer Science degree. I have a strong passion for software
					development, design and data analysis. As well as the way these can
					impact people and businesses around the world. I'm hardworking, and
					always interested in learning something new.
				</Text>
				<ColourModeHookTester />
				<GithubProjects />
			</Box>
			<Footer />
		</>
	);
};

export default IndexPage;
