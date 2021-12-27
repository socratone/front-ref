import styled from 'styled-components';

type BulletTextProps = {
  indent?: number;
  children: string;
};

const BulletText = ({ indent = 0, children }: BulletTextProps) => {
  return (
    <Container>
      <Dot paddingLeft={indent * 18}>•</Dot>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Dot = styled.div<{ paddingLeft: number }>`
  padding-left: ${(props) => props.paddingLeft + 'px'};
  width: 18px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

const Text = styled.p`
  margin: 0;
`;

export default BulletText;
