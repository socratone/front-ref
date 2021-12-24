import styled from 'styled-components';

type PageTitleProps = {
  marginBottom?: number;
  children: string;
};

const PageTitle = ({ marginBottom, children }: PageTitleProps) => {
  return (
    <Container
      style={{ marginBottom: marginBottom ? marginBottom + 'px' : undefined }}
    >
      {children}
    </Container>
  );
};

const Container = styled.h1``;

export default PageTitle;
