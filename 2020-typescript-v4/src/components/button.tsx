import styled from '@emotion/styled';
import { Link, Button as ChakraButton } from '@chakra-ui/core';

export const Button = styled(ChakraButton)`
	cursor: pointer;
	border-radius: 3px;
	padding: 0.7rem 2.5rem;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #fff;
	background: #38d39f;
	transition: 0.2s ease;
	color: white !important;

	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	&:hover {
		transform: scale(1.1);
		background-color: #69e8bd;
	}
`;
