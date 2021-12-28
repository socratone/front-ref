import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type TextProps = {
  mb?: number;
  children: React.ReactNode;
};

const Text = ({ mb, children }: TextProps) => {
  const { fontColor } = useContext(ColorContext);

  return (
    <Container
      style={{
        marginBottom: mb ? mb + 'px' : undefined,
        color: fontColor,
      }}
    >
      {children}
    </Container>
  );
};

const Container = styled.p`
  line-height: 1.5;
`;

export default Text;
