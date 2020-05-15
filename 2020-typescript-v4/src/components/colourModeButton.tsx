import React from 'react';
import { Button, Text, useColorMode } from '@chakra-ui/core';

export const ColourModeHookTester = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	function matchingEmoji() {
		return colorMode == 'light' ? '🌜' : '🌞';
	}

	return (
		<>
			<Button
				variantColor="teal"
				onClick={toggleColorMode}
				position="absolute"
				bottom={5}
				right={5}
				rounded="50%"
				height="40px"
				width="40px"
				display="flex"
			>
				<Text
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%,-50%)"
					fontSize={'xl'}
				>
					{matchingEmoji()}
				</Text>
			</Button>
		</>
	);
};
