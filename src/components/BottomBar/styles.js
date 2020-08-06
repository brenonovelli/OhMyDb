import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  padding: 0 0.25rem;

  background: var(--gray);
  border: rgba(var(--grayRGB), 0.2) 1px solid;
  border-width: 1px 1px 0 1px;
  border-radius: 1rem 1rem 0 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    font-size: 1.25rem;
    color: var(--mainLight);

    transition: color 0.2s ease-in-out;

    margin: 0 1rem;

    &.active {
      color: var(--mainLight);
    }
  }
`;

export const Count = styled.div`
  position: absolute;
  background: var(--red);
  color: var(--mainLight);
  font-size: 0.675rem;
  font-weight: 900;
  padding: 1px 0.25rem;
  border-radius: 0.5rem;
  top: -0.25rem;
  right: 0.25rem;
  transform: translateX(100%);
`;
