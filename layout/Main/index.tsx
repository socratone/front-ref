import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  const { backgroundColor } = useContext(ColorContext);

  return <Container background={backgroundColor}>{children}</Container>;
};

const Container = styled.main<{ background: string }>`
  background: ${(props) => props.background};
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 800px) {
    height: 100%;
  }
`;

export default Main;
