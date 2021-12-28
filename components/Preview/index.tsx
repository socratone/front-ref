import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type PreviewProps = {
  children: string;
};

const Preview = ({ children }: PreviewProps) => {
  const { fontColor, backgroundColor } = useContext(ColorContext);
  const darkMode = backgroundColor !== '#fff';

  return (
    <Container
      fontColor={fontColor}
      borderColor={darkMode ? '#3a3a3a' : 'gainsboro'}
    >
      {children}
    </Container>
  );
};

const Container = styled.article<{ fontColor: string; borderColor: string }>`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.fontColor};
`;

export default Preview;
