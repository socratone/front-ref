import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';

type IconButtonProps = {
  children: React.ReactElement;
  onClick?: () => void;
  diameter?: number;
};

const IconButton = ({ children, onClick, diameter = 30 }: IconButtonProps) => {
  const { backgroundColor, fontColor } = useContext(ColorContext);
  const darkMode = backgroundColor !== '#fff';

  return (
    <Container
      onClick={onClick}
      diameter={diameter}
      darkMode={darkMode}
      iconColor={fontColor}
    >
      {children}
    </Container>
  );
};

const Container = styled.button<{
  diameter: number;
  darkMode: boolean;
  iconColor: string;
}>`
  width: ${(props) => props.diameter + 'px'};
  height: ${(props) => props.diameter + 'px'};
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;

  :hover {
    background: ${(props) => (props.darkMode ? '#ffffff11' : '#00000011')};
  }

  :active {
    background: ${(props) => (props.darkMode ? '#ffffff22' : '#00000022')};
  }

  svg {
    width: 50%;
    height: 50%;
    fill: ${(props) => props.iconColor};
  }
`;

export default IconButton;
