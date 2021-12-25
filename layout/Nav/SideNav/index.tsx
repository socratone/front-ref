import { useContext } from 'react';
import styled from 'styled-components';
import DarkModeSwitch from '../../../components/DarkModeSwitch';
import ColorContext from '../../../context/colorContext';
import NavItem from './Item';

type SideNavProps = {
  items: {
    name: string;
    href: string;
  }[];
};

const SideNav = ({ items }: SideNavProps) => {
  const { sideNavColor, backgroundColor, setDarkMode } =
    useContext(ColorContext);

  const handleChangeDarkMode = (event: any, checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <Aside background={sideNavColor}>
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
    </Aside>
  );
};

const Aside = styled.aside<{ background: string }>`
  background: ${(props) => props.background};
  height: 100%;
  padding: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Items = styled.ul`
  > * {
    margin-bottom: 5px;
  }
`;

const DarkModeContainer = styled.div``;

export default SideNav;
