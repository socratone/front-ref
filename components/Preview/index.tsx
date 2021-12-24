import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type PreviewProps = {
  children: string;
};

const Preview = ({ children }: PreviewProps) => {
  const { fontColor } = useContext(ColorContext);

  return <Container style={{ color: fontColor }}>{children}</Container>;
};

const Container = styled.article`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gainsboro;
`;

export default Preview;
