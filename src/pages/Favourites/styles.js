import styled from 'styled-components';

export const Container = styled.main`
  header {
    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      padding: 3.25rem 0 0;
      line-height: 1.5;

      svg {
        fill: var(--mainLight);
        margin-right: 0.5rem;
        font-size: 1.25rem;
        vertical-align: middle;
      }
    }

    margin-bottom: 1.25rem;
  }

  article {
    background: rgba(var(--grayRGB), 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: 0.2s ease-in-out all;

    button {
      color: var(--gray);
      font-size: 0.875rem;
      transition: 0.2s ease-in-out all;
    }

    &:hover {
      background: rgba(var(--grayRGB), 0.2);
      button {
        color: var(--mainLight);
      }
    }
  }
`;
