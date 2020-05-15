/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { Box, Heading, Flex, Text, Button, Link } from '@chakra-ui/core';

export const Footer = props => {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<Flex
			as="footer"
			flexDirection="row"
			wrap="wrap"
			padding="1.5rem"
			// position="fixed"
			bottom="0px"
			{...props}
		>
			<Flex flexDirection="column">
				<Text as="h4" fontSize="lg" fontWeight="500">
					Jordi Hermoso
				</Text>
				<Text fontSize="sm">
					© {new Date().getFullYear()} | Made with{' '}
					<span aria-label="love" className="darkmode-ignore" role="img">
						💚
					</span>{' '}
					by{' '}
					<a
						href="https://github.com/jordiup"
						rel="noopener noreferrer"
						target="_blank"
					>
						Jordi
					</a>
				</Text>
				{/* <span>Illustrations by Katerina Limpitsouni - Undraw</span> */}
			</Flex>
			<Flex>
				{/* {social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${icon}`}
					>
						<img width="34" src={icon} alt={name} />
					</a>
				))} */}
			</Flex>
		</Flex>
	);
};

// export default Footer;
