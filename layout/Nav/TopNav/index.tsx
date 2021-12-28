import { useContext, useState } from 'react';
import styled from 'styled-components';
import DarkModeSwitch from '../../../components/DarkModeSwitch';
import ColorContext from '../../../context/colorContext';
import NavItem from '../SideNav/Item';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '../../../components/IconButton';

type TopNavProps = {
  items: {
    name: string;
    href: string;
  }[];
};

const TopNav = ({ items }: TopNavProps) => {
  const { navColor, backgroundColor, setDarkMode } = useContext(ColorContext);

  const [open, setOpen] = useState(false);

  const handleChangeDarkMode = (event: any, checked: boolean) => {
    setDarkMode(checked);
  };

  const handleClickMenuButton = () => {
    setOpen((open) => !open);
  };

  return (
    <Header background={navColor}>
      <IconButton onClick={handleClickMenuButton}>
        <MenuIcon />
      </IconButton>

      {open && (
        <Dropdown background={navColor}>
          <Nav>
            <Items>
              {items.map((item) => (
                <NavItem key={item.href} href={item.href}>
                  {item.name}
                </NavItem>
              ))}
            </Items>
            <DarkModeContainer>
              <DarkModeSwitch
                checked={backgroundColor === '#fff' ? false : true}
                onChange={handleChangeDarkMode}
              />
            </DarkModeContainer>
          </Nav>
        </Dropdown>
      )}
    </Header>
  );
};

const Header = styled.header<{ background: string }>`
  position: relative;
  background: ${(props) => props.background};
  height: 40px;
  padding: 0 20px;
  flex-shrink: 0;
  display: none;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
  }
`;

const Dropdown = styled.div<{ background: string }>`
  position: absolute;
  background: ${(props) => props.background};
  top: 100%;
  left: 0;
  width: 100vw;
  overflow: hidden;
  height: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px 20px 20px;
`;

const Items = styled.ul`
  > * {
    margin-bottom: 5px;
  }
`;

const DarkModeContainer = styled.div``;

export default TopNav;
