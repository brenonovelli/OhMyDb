import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--gray);
  border: rgba(var(--grayRGB), 0.2) 1px solid;
  border-width: 1px 1px 0 1px;
  border-radius: 1rem 1rem 0 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    color: var(--mainDark);

    transition: color 0.2s ease-in-out;

    &.active {
      color: var(--mainLight);
    }

    svg {
      margin: 0 1rem;
    }
  }
`;
