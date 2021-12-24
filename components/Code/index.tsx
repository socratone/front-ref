import styled from 'styled-components';

type CodeProps = {
  style?: React.CSSProperties;
  children: string;
};

const Code = ({ style, children }: CodeProps) => {
  return (
    <Container style={style}>
      <code>{children}</code>
    </Container>
  );
};

const Container = styled.article`
  padding: 10px;
  background: rgb(40, 44, 52);
  border-radius: 5px;

  code {
    color: white;
  }
`;

export default Code;
