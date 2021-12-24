import styled from 'styled-components';
import NavItem from './Item';

const SideNav = () => {
  return (
    <Aside>
      <Nav>
        <Items>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/library/moment">Moment</NavItem>
        </Items>
      </Nav>
    </Aside>
  );
};

const Aside = styled.aside`
  background: #d3e9ff;
  width: 200px;
  height: 100%;
  padding: 20px;
`;

const Nav = styled.nav``;

const Items = styled.ul`
  > * {
    margin-bottom: 5px;
  }
`;

export default SideNav;
