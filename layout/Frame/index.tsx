import styled from 'styled-components';

type FrameProps = {
  children: React.ReactNode;
};

const Frame = ({ children }: FrameProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 240px 1fr;

  @media (max-width: 800px) {
    display: block;
  }
`;

export default Frame;
