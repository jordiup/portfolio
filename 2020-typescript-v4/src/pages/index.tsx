import { Box, Heading } from '@chakra-ui/core';
import React from 'react';
import { ColourModeHookTester } from '../components/colourModeHookTester';
import { Header } from '../components/header';
import { SEO } from '../components/seo';

const IndexPage = () => {
	return (
		<>
			<SEO />
			<Header />
			<Box p={5}>
				<Heading size="md" mb={5}>
					This is a test heading
				</Heading>
				<ColourModeHookTester />
			</Box>
		</>
	);
};

export default IndexPage;
