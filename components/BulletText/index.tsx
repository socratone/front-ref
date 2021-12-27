import styled from 'styled-components';

type BulletTextProps = {
  children: string;
};

const BulletText = ({ children }: BulletTextProps) => {
  return (
    <Container>
      <Dot>•</Dot>
      <span>{children}</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Dot = styled.div``;

const Text = styled.p``;

export default BulletText;
