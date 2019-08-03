import styled from 'styled-components'

export const Button = styled.a`
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
	background: #38D39F;
	transition: .2s ease;
	color: white !important;

	// font-family: sans-serif;

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
	

	${({ secondary }) =>
		secondary &&
		`
		background: #001F3F;
	`}
`
