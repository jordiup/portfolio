import { Box, Heading, Text, Flex } from '@chakra-ui/core';
import React from 'react';
import { ColourModeHookTester } from '../components/colourModeButton';
import { Header } from '../components/header';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { GithubProjects } from '../components/githubProjects';
import { GridPics } from '../components/gridPics';
import { ResumeDownload } from '../components/resumeDownload';
import { Section } from '../components/section';

const IndexPage = () => {
	return (
		<>
			<SEO />
			<Header />
			<GridPics />
			<Flex
				p={5}
				className="container"
				alignItems="center"
				flexDirection="column"
			>
				<Section>
					<Box id="#about" mb={10}>
						<Heading size="md" mb={5}>
							About
						</Heading>
						<Text>
							I'm a Frontend Developer specializing in React. I've just
							graduated with a Computer Science degree. I have a strong passion
							for software development, design and data analysis. As well as the
							way these can impact people and businesses around the world. I'm
							hardworking, and always interested in learning something new.
						</Text>
					</Box>
				</Section>
				<GithubProjects mb={10} />
				<ResumeDownload />
			</Flex>
			<ColourModeHookTester />
			<Footer />
		</>
	);
};

export default IndexPage;
