import styled from 'styled-components';

type FrameProps = {
  children: React.ReactNode;
};

const Frame = ({ children }: FrameProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export default Frame;
