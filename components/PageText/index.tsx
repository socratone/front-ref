import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type PageTextProps = {
  marginBottom?: number;
  children: React.ReactNode;
};

const PageText = ({ marginBottom, children }: PageTextProps) => {
  const { fontColor } = useContext(ColorContext);

  return (
    <Container
      style={{
        marginBottom: marginBottom ? marginBottom + 'px' : undefined,
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

export default PageText;
