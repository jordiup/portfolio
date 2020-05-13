import React from 'react';
import { Button, Text, useColorMode } from '@chakra-ui/core';

export const ColourModeHookTester = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Text mb={3}>Color mode: {colorMode}</Text>
			<Button variantColor="teal" onClick={toggleColorMode}>
				Toggle color mode
			</Button>
		</>
	);
};
