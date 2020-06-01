import { Box, Heading, Text, Flex, Stack, Image } from '@chakra-ui/core';
import React from 'react';
import { ColourModeHookTester } from '../components/colourModeButton';
import { Header } from '../components/header';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { GithubProjects } from '../components/githubProjects';
import { HeroGridPics } from '../components/heroGridPics';
import { ResumeDownload } from '../components/resumeDownload';
import { Section } from '../components/section';
import { StaticImageGallery } from '../components/staticImageGallery';

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
					<Box mb={10}>
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
				<GithubProjects />
				<Section mt={6}>
					<Heading size="md" mb={5}>
						Gallery
						{/* Web, UI & UX */}
					</Heading>
					{/* <Text>
						This section of my portfolio showcases web design projects I've
						undertaken. Projects have been carried out with a number of
						companies, not-for-profit organisations, and startups. It showcases
						work that is live on the web, as well as interactive prototypes
						developed with popular ui/ux software.
					</Text> */}
					<Stack isInline>
						<StaticImageGallery relativeDirectory={'web'} />
						{/* <StaticImageGallery relativeDirectory={'graphic-design'} /> */}
						{/* <Image src="/static/portfolio/web/2018-03-27-22-14-unearthedwa.com.png" /> */}
						{/* <Image src="./static/portfolio/web/remedium.app_.png" /> */}
						{/* <Image
							src={'./portfolio/web/2018-03-27-22-14-unearthedwa.com.png'}
						/> */}
					</Stack>
				</Section>
				<ResumeDownload />
			</Flex>
			<ColourModeHookTester />
			<Footer />
		</>
	);
};

export default IndexPage;
