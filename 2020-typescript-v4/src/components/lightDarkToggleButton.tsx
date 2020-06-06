import React from 'react';
import { Button, Text, useColorMode } from '@chakra-ui/core';

export const LightDarkToggleButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	function matchingEmoji() {
		return colorMode == 'light' ? '🌜' : '🌞';
	}

	return (
		<>
			<Button
				variantColor="green"
				onClick={toggleColorMode}
				position="fixed"
				bottom="20px"
				right={6}
				rounded="50%"
				height="40px"
				width="40px"
				display="flex"
				zIndex={99}
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
