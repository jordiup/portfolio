import styled from 'styled-components'

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;

  h1 {
    transition: all 0.4s ease;
    &:hover {
      background: linear-gradient(
        49deg,
        #20bf55,
        #01baef,
        #212121,
        #212121,
        #212121
      );
      background-size: 1000% 1000%;
      transform: scale(1.02);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: AnimationName 3s ease infinite;

      @keyframes AnimationName {
        0% {
          background-position: 0% 46%;
        }
        50% {
          background-position: 100% 55%;
        }
        100% {
          background-position: 0% 46%;
        }
      }
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`
