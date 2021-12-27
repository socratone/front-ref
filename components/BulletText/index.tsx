import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type BulletTextProps = {
  indent?: number;
  children: string;
};

const BulletText = ({ indent = 0, children }: BulletTextProps) => {
  const { fontColor } = useContext(ColorContext);

  return (
    <Container fontColor={fontColor}>
      <Dot marginLeft={indent * 18}>•</Dot>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div<{ fontColor: string }>`
  display: flex;
  color: ${(props) => props.fontColor};
`;

const Dot = styled.div<{ marginLeft: number }>`
  margin-left: ${(props) => props.marginLeft + 'px'};
  width: 18px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

const Text = styled.p``;

export default BulletText;
