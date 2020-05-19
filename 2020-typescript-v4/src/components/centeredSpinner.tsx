import React from 'react';
import { Flex, Spinner } from '@chakra-ui/core';

export const CenteredSpinner = () => (
	<Flex
		width="100%"
		height="100%"
		flexDirection="column"
		justifyContent="center"
		alignItems="center"
		alignContent="center"
		opacity={0.5}
		cursor="not-allowed"
	>
		<Spinner />
	</Flex>
);
