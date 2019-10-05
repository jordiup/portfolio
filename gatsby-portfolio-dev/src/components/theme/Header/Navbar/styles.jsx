import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 3.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121 !important;

    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.02);
    }
  }
`
