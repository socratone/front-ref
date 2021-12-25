import styled from 'styled-components';

type IconButtonProps = {
  children: React.ReactElement;
  onClick?: () => void;
  diameter?: number;
};

const IconButton = ({ children, onClick, diameter = 30 }: IconButtonProps) => {
  return (
    <Container onClick={onClick} diameter={diameter}>
      {children}
    </Container>
  );
};

const Container = styled.button<{ diameter: number }>`
  width: ${(props) => props.diameter + 'px'};
  height: ${(props) => props.diameter + 'px'};
  border-radius: 50%;
  cursor: pointer;
  background: white;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;

  :hover {
    background: whitesmoke;
  }

  :active {
    background: gainsboro;
  }

  svg {
    width: 50%;
    height: 50%;
  }
`;

export default IconButton;
