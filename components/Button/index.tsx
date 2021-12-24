import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  children: string;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.button`
  background: dodgerblue;
  color: white;
  font-weight: 600;
  height: 40px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 20px;

  :hover {
    background: #166fc9;
  }

  :active {
    background: #0e559c;
  }
`;

export default Button;
