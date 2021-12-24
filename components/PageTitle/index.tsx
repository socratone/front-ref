import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type PageTitleProps = {
  marginBottom?: number;
  children: string;
};

const PageTitle = ({ marginBottom, children }: PageTitleProps) => {
  const { fontColor } = useContext(ColorContext);

  return (
    <Container
      style={{
        marginBottom: marginBottom ? marginBottom + 'px' : undefined,
        color: fontColor,
      }}
    >
      {children}
    </Container>
  );
};

const Container = styled.h1``;

export default PageTitle;
