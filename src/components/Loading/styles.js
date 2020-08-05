import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > div {
    margin-bottom: 0.25rem;

    svg {
      font-size: 1.5rem;
      color: ${props => props.theme.primaryColor};
      animation: ${spin} 1s infinite cubic-bezier(0.59, 0.18, 0.46, 0.9);
    }
  }

  transition: all ease-in-out 0.3s;

  &.active {
    opacity: 1;
    z-index: 10;
  }
`;
