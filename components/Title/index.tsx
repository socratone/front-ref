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
        marginBottom: mb !== undefined ? mb + 'px' : undefined,
        color: fontColor,
      }}
    >
      {children}
    </Container>
  );
};

const Container = styled.h1`
  margin-bottom: 10px;
`;

export default Title;
