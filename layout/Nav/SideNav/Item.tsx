import styled from 'styled-components';
import Link from 'next/link';
import { useContext } from 'react';
import ColorContext from '../../../context/colorContext';

type NavItemProps = {
  href: string;
  children: string;
};

const NavItem = ({ href, children }: NavItemProps) => {
  const { fontColor } = useContext(ColorContext);

  return (
    <Container style={{ color: fontColor }}>
      <Link href={href}>{children}</Link>
    </Container>
  );
};

const Container = styled.li`
  list-style: none;

  a:hover {
    font-weight: 600;
  }
`;

export default NavItem;
