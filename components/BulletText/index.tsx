import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';
import CircleIcon from './CircleIcon';

type BulletTextProps = {
  indent?: number;
  mb?: number;
  children: string;
};

const BulletText = ({ indent = 0, mb, children }: BulletTextProps) => {
  const { fontColor } = useContext(ColorContext);

  return (
    <Container fontColor={fontColor} mb={mb}>
      <DotArea marginLeft={indent * 18}>
        <IconContainer>
          <CircleIcon fill={fontColor} />
        </IconContainer>
      </DotArea>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div<{ fontColor: string; mb?: number }>`
  display: flex;
  color: ${(props) => props.fontColor};
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : undefined)};
`;

const DotArea = styled.div<{ marginLeft: number }>`
  margin-left: ${(props) => props.marginLeft + 'px'};
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
`;

const IconContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

const Text = styled.p``;

export default BulletText;
