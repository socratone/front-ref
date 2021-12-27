import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type BulletTextProps = {
  indent?: number;
  mb?: number;
  children: string;
};

const BulletText = ({ indent = 0, mb, children }: BulletTextProps) => {
  const { fontColor } = useContext(ColorContext);

  return (
    <Container fontColor={fontColor} mb={mb}>
      <Dot marginLeft={indent * 18}>•</Dot>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div<{ fontColor: string; mb?: number }>`
  display: flex;
  color: ${(props) => props.fontColor};
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : undefined)};
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
