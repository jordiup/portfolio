import React, { ReactChildren, ReactChild, ReactElement } from 'react';
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
			my={6}
		>
			{children}
		</Flex>
	);
};
