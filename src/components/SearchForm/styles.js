import styled from 'styled-components';

export const Container = styled.header`
  padding: 3.75rem 0 1.5rem;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 0 0.5rem;

  border-radius: 0.25rem;

  background: var(--mainLight);

  svg {
    color: var(--mainDark);
    font-size: 0.875rem;
    margin-right: 0.75rem;

    transition: color 0.2s ease;
  }

  &:focus-within {
    svg {
      color: var(--red);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.875rem;
`;
