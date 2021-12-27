import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type TitleProps = {
  mb?: number;
  children: string;
};

const Title = ({ mb, children }: TitleProps) => {
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

const Container = styled.h1``;

export default Title;
