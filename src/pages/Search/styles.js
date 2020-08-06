import styled from 'styled-components';

export const Container = styled.div``;

export const ListMovies = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
`;

export const Pagination = styled.footer`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  div {
    min-width: 8rem;

    :first-child {
      justify-self: flex-start;
    }

    :last-child {
      button {
        margin-left: auto;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 7.5rem;
    min-height: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;

    font-size: 0.875rem;
    color: var(--mainLight);
    background: rgba(var(--mainLightRGB), 0.025);

    transition: 0.2s ease-in-out all;

    svg {
      font-size: 1rem;
      margin: 0 0.25rem;
    }

    &:hover {
      border-radius: 0.5rem;
      background: rgba(var(--mainLightRGB), 0.1);
    }
  }

  .infos {
    font-size: 0.875rem;
    text-align: center;
    color: var(--gray);
    transition: 0.2s ease-in-out color;
    padding: 1rem;

    @media (max-width: 576px) {
      order: 3;
      width: 100%;
    }

    &:hover {
      color: var(--mainLight);
    }

    small {
      display: block;
    }
  }
`;

export const ErrorBox = styled.div`
  text-align: center;

  svg {
    font-size: 2rem;
  }
`;
