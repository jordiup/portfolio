import { Box, Heading, Text, Flex, Stack, Image } from '@chakra-ui/core';
import React from 'react';
import { LightDarkToggleButton } from '../components/lightDarkToggleButton';
import { Header } from '../components/header';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { GithubProjects } from '../components/githubProjects';
import { HeroGridPics } from '../components/heroGridPics';
import { ResumeDownload } from '../components/resumeDownload';
import { Section } from '../components/section';
import { StaticImageGallery } from '../components/staticImageGallery';
import { Technologies } from '../components/technologies';
import { GradientHeading } from '../components/gradientHeading';

const IndexPage = () => {
	return (
		<>
			<SEO />
			<Header />
			<HeroGridPics />
			<Flex
				p={5}
				className="container"
				alignItems="center"
				flexDirection="column"
			>
				<Section id="about">
					<GradientHeading size="md" mb={5}>
						About
						</GradientHeading>
					<Text>
						I'm a Frontend Developer specializing in React. I've just
						graduated with a Computer Science degree. I have a strong passion
						for software development, design and data analysis. As well as the
						way these can impact people and businesses around the world. I'm
						hardworking, and always interested in learning something new.
						</Text>
				</Section>
				<Technologies />
				<GithubProjects />
				<StaticImageGallery relativeDirectory={'web'} />
				<ResumeDownload />
			</Flex>
			<LightDarkToggleButton />
			<Footer />
		</>
	);
};

export default IndexPage;
