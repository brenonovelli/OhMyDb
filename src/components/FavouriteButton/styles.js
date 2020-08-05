import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${props =>
    !props.full &&
    css`
      position: absolute;
      top: 0.625rem;
      right: 0.625rem;
      opacity: ${props.isFavorite ? '1' : '0'};

      transition: 0.3s ease-in-out opacity;

      z-index: 2;

      svg {
        color: var(--mainLight);
        fill: ${props.isFavorite ? 'var(--mainLight)' : 'transparent'};

        transition: 0.2s ease-in-out all;
      }

      &:hover {
        svg {
          color: var(--red);
        }
      }
    `}

  ${props =>
    props.full &&
    css`
      display: flex;
      align-items: center;

      overflow: hidden;

      padding: 0 0.5rem;
      margin-bottom: 0.5rem;
      height: 2rem;

      border-radius: 0.25rem;
      border: 1px solid rgba(var(--grayRGB), 0.1);
      color: var(--gray);
      font-size: 0.75rem;
      font-weight: 500;

      transition: all 0.2s ease-in-out;

      svg {
        transition: all 0.2s ease-in-out;
        fill: transparent;
      }

      span {
        padding-left: 0.5rem;
      }

      &:hover {
        background: var(--mainLight);
        color: var(--mainDark);

        svg {
          color: var(--red);
        }
      }

      ${props.isFavorite &&
      css`
        background: var(--mainLight);
        color: var(--mainDark);
        border: none;

        svg {
          transform: scale(1.25, 1.25);
          fill: var(--red);
          color: var(--red);
        }

        span {
          max-width: 0;
          padding: 0;
          overflow: hidden;
          transition: all 0.2s ease-in-out;
          white-space: nowrap;
        }

        &:hover {
          span {
            max-width: 10rem;
            padding-left: 0.5rem;
            overflow: hidden;
          }
        }
      `}
    `}
`;
