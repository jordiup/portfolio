import React, { ReactChildren, ReactChild } from 'react';
import { Flex, FlexProps } from '@chakra-ui/core';

export const Section = ({
	children,
	...rest
}: {
	children?: ReactChildren | ReactChild;
	rest?: FlexProps;
}) => {
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
			{...rest}
		>
			{children}
		</Flex>
	);
};
