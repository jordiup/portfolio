import { Box, Heading, Text, Flex, Stack, Image } from '@chakra-ui/core';
import React, { useEffect } from 'react';
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
	// useEffect that sends an alert on mount :)))
	useEffect(() => {
		alert(
			'This portfolio site is currently 3 years out of date, and in need of a refresh!\nTo see my latest work, please see my LinkedIn/Github profiles, and expect an updated site shortly.\nCheers.'
		);
	}, []);

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
					{/* This section of my portfolio showcases web design projects I've
				undertaken. Projects have been carried out with a number of
				companies, not-for-profit organisations, and startups. It showcases
				work that is live on the web, as well as interactive prototypes
				developed with popular ui/ux software. */}
					<Text>
						I'm a Senior Frontend Developer with 5+ years of experience working
						in a number of companies, not-for-profit organisations, and
						startups. I have a strong passion for software development and
						design. As well as the way these can impact people around the world.
						I'm hardworking, and always interested in learning something new.
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
