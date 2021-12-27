import styled from 'styled-components';

type CodeProps = {
  mb?: number;
  children: string;
};

const Code = ({ mb, children }: CodeProps) => {
  return (
    <Container mb={mb}>
      <code>{children}</code>
    </Container>
  );
};

const Container = styled.article<{ mb?: number }>`
  padding: 10px;
  background: rgb(40, 44, 52);
  border-radius: 5px;
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : undefined)};

  code {
    color: #f0f0f0;
  }
`;

export default Code;
