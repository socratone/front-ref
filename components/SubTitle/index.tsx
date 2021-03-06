import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type SubTitleProps = {
  mb?: number;
  children: string;
};

const SubTitle = ({ mb, children }: SubTitleProps) => {
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

const Container = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export default SubTitle;
