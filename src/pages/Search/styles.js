import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  width: 924px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const ListMovies = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
`;

export const Pagination = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-top: 2rem;

  div {
    justify-self: center;

    :first-child {
      justify-self: flex-start;
    }

    :last-child {
      justify-self: flex-end;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    padding: 1rem;
    border-radius: 0.25rem;

    font-size: 0.875rem;
    color: var(--mainLight);
    background: rgba(var(--mainLightRGB), 0.05);

    transition: 0.2s ease-in-out all;

    svg {
      font-size: 1rem;
      margin: 0 0 0 0.25rem;
    }

    &:first-child {
      svg {
        margin: 0 0.25rem 0 0;
      }
    }

    &:hover {
      border-radius: 0.5rem;
      background: rgba(var(--mainLightRGB), 0.1);
    }
  }

  .infos {
    font-size: 0.875rem;
    color: var(--gray);
    transition: 0.2s ease-in-out color;

    &:hover {
      color: var(--mainLight);
    }
  }
`;

export const ErrorBox = styled.div`
  text-align: center;

  svg {
    font-size: 2rem;
  }
`;
