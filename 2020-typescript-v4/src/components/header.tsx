/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { Box, Heading, Flex, Text, Button, Link } from '@chakra-ui/core';

const MenuItems = ({ children }) => (
	<Link
		// mt={{ base: 4, md: 0 }}
		mr={6}
		display="block"
		fontFamily="Eczar"
		href={'#' + children.toString().toLowerCase()}
		css={css`
			text-decoration: none;
			transition: all 0.2s ease;
			&:hover {
				transform: scale(1.02);
				text-decoration: none;
			}
		`}
	>
		{children}
	</Link>
);

export const Header = props => {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<Flex as="nav" flexDirection="row" wrap="wrap" padding="1.5rem" {...props}>
			<Flex align="center" mr={5}>
				<Link href="/">
					<Heading
						as="h1"
						size="lg"
						letterSpacing={'-.1rem'}
						css={css`
							&hover: text-decoration: none;
							text-decoration: none;
						`}
					>
						Jordi Hermoso
					</Heading>
				</Link>
			</Flex>

			<Flex alignItems="center" ml="auto">
				<MenuItems>About</MenuItems>
				<MenuItems>Projects</MenuItems>
				<MenuItems>Resume</MenuItems>
			</Flex>

			{/* <Box
				display={{ sm: show ? 'block' : 'none', md: 'block' }}
				mt={{ base: 4, md: 0 }}
			>
				<Button bg="transparent" border="1px">
					Create account
				</Button>
			</Box> */}
		</Flex>
	);
};

// export default Header;
