import styled from 'styled-components'

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: #212121 !important;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
