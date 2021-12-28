import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../context/colorContext';
import Title from '../Title';
import HomeIcon from '@mui/icons-material/Home';

type TitleHeaderProps = {
  title: string;
  url: string;
};

const TitleHeader = ({ title, url }: TitleHeaderProps) => {
  const { fontColor } = useContext(ColorContext);

  const handleClick = () => {
    window.open(url);
  };

  return (
    <Container>
      <Title mb={0}>{title}</Title>
      <StyledHomeIcon $color={fontColor} onClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHomeIcon = styled(HomeIcon)<{ $color: string }>`
  cursor: pointer;
  color: ${(props) => props.$color};

  :active {
    transform: scale(0.9);
  }
`;

export default TitleHeader;
