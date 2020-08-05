import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  width: 924px;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  main {
    max-width: 60%;
    min-width: calc(320px - 2rem);
  }
`;

export const NavTop = styled.nav`
  width: 100%;

  padding: 3.75rem 0 0.25rem;

  svg {
    color: var(--gray);
    font-size: 1.25rem;
  }
`;

export const ContainerInfos = styled.main`
  opacity: ${props => (props.loading ? '0' : '1')};
  transform: ${props =>
    props.loading ? ' translateX(-5%)' : ' translateX(0)'};
  transition: all 0.5s ease-in-out;

  header {
    h1 {
      font-size: 3.75rem;
      font-weight: 700;
      padding: 1.25rem 0;
      line-height: 1;
    }

    margin-bottom: 1.25rem;
  }

  section {
    margin-bottom: 2rem;

    &.list {
      display: grid;
      max-width: 100vw;
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
      grid-auto-flow: row;
    }

    h2,
    dt {
      font-size: 1rem;
      font-weight: 500;
      color: var(--gray);
      margin-bottom: 0.5rem;
    }

    p,
    dd {
      line-height: 1.5;
      font-size: 0.875rem;
    }
  }
`;

export const Poster = styled.aside`
  opacity: ${props => (props.loading ? '0' : '1')};
  transform: ${props =>
    props.loading ? ' translateX(-5%)' : ' translateX(0)'};
  transition: all 0.6s ease-in-out;

  text-align: center;
  width: 40%;
  min-width: calc(320px - 2rem);

  img {
    border-radius: 0.5rem;
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const SmallInfos = styled.div`
  color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    &.rated {
      color: var(--mainDark);
      background: var(--gray);
      border-radius: 0.25rem;
      padding: 0.15rem 0.25rem;
      font-size: 0.75rem;
      font-weight: 700;
    }

    & + span {
      margin-left: 1rem;
      position: relative;

      &:before {
        content: '•';
        position: absolute;
        top: 50%;
        left: -0.75rem;
        transform: translate(50%, -50%);
        color: var(--gray);
        font-size: 0.675rem;
      }
    }
  }
`;

export const MoreInfos = styled.div`
  display: flex;
  flex-flow: wrap;

  > * {
    &:not(:last-child) {
      margin-right: 0.75rem;
    }
  }

  .item {
    display: flex;
    align-items: center;

    overflow: hidden;

    height: 2rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(var(--grayRGB), 0.1);

    font-size: 0.75rem;
    font-weight: 500;

    margin-bottom: 0.5rem;

    .logo {
      padding: 0.5rem;
      flex: 1;

      img {
        height: 0.875rem;
      }

      &.imbd {
        background: #ff9a1a;
      }

      &.rottenTomatoes {
        background: #f93208;
      }
    }

    .value {
      padding: 0 0.5rem;

      white-space: nowrap;
    }
  }
`;
