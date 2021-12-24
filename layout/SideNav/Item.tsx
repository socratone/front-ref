import styled from 'styled-components';
import Link from 'next/link';

type NavItemProps = {
  href: string;
  children: string;
};

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <Container>
      <Link href={href}>{children}</Link>
    </Container>
  );
};

const Container = styled.li`
  list-style: none;
`;

export default NavItem;
