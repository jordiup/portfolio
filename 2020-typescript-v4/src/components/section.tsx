import React from 'react';
import { Flex } from '@chakra-ui/core';

export const Section = ({ children }) => {
	return (
		<Flex
			width={[
				'100%', // base
				'95%', // 480px upwards
				'90%', // 768px upwards
				'70%' // 992px upwards
			]}
			justifyContent="center"
			flexDirection="column"
		>
			{children}
		</Flex>
	);
};
