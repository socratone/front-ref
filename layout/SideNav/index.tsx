import { useContext } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import ColorContext from '../../context/colorContext';
import NavItem from './Item';

const SideNav = () => {
  const { sideNavColor, onToggleDarkMode } = useContext(ColorContext);

  return (
    <Aside background={sideNavColor}>
      <Nav>
        <Items>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/library/moment">Moment</NavItem>
        </Items>
        <DarkModeContainer>
          <Button onClick={onToggleDarkMode}>Dark Mode</Button>
        </DarkModeContainer>
      </Nav>
    </Aside>
  );
};

const Aside = styled.aside<{ background: string }>`
  background: ${(props) => props.background};
  width: 200px;
  height: 100%;
  padding: 20px;
  flex-shrink: 0;
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
