import styled, { css, keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    background: rgba(var(--mainLightRGB), 0.05);
  }
  50% {
    background: rgba(var(--mainLightRGB), 0.025);
  }
  100% {
    background: rgba(var(--mainLightRGB), 0.05);
  }
`;

const shimmer = keyframes`
  to {
   left: 100%;
   transform: translateX(0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.li`
  overflow: hidden;
  position: relative;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;

    border: 1px solid rgba(var(--mainLightRGB), 0.01);
  }

  &:hover {
    a > div {
      opacity: 1;
    }

    > button {
      opacity: 1;
    }
  }

  ${props =>
    !props.empty &&
    css`
      animation: ${fade} 1s ease-in-out infinite;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        animation: ${spin} 2s cubic-bezier(0.59, 0.18, 0.46, 0.9) infinite;
      }

      &:after {
        animation: ${shimmer} 2s ease-in-out infinite;
        position: absolute;
        left: 0;
        transform: translateX(-100%);

        content: '';
        width: 50%;
        height: 100%;

        background: linear-gradient(
          90deg,
          transparent,
          rgba(var(--mainLightRGB), 0.04),
          transparent
        );
      }
    `}
`;

export const PlaceholderPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  svg {
    margin-bottom: 0.25rem;
    font-size: 2rem;
    color: var(--mainLight);
  }
`;

export const InfosWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: ${props => (props.hasPoster ? 0 : 1)};
  transition: 0.3s ease-in-out all;

  width: 100%;
  height: 100%;
  padding: 0.625rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background: rgba(var(--mainDarkRGB), 0.95);

  border: ${props =>
    props.hasPoster ? 'none' : '1px solid rgba(var(--mainLightRGB), .1)'};

  &:hover {
    border-color: ${props =>
      props.hasPoster ? 'none' : 'rgba(var(--mainLightRGB), .4)'};
  }

  span {
    font-size: 0.875rem;
    opacity: 0.8;
  }

  @media (max-width: 576px) {
    opacity: 1;
    height: auto;
    font-size: 0.75rem;
    border-radius: 0.25rem 0.25rem 0.5rem 0.5rem;
  }
`;
