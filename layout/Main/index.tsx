import styled from 'styled-components';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  padding: 20px;
`;

export default Main;
