import styled from 'styled-components';

type PreviewProps = {
  children: string;
};

const Preview = ({ children }: PreviewProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.article`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gainsboro;
`;

export default Preview;
