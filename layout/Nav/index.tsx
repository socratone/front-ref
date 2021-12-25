import SideNav from './SideNav';
import TopNav from './TopNav';

const items = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/library/moment',
    name: 'Moment',
  },
];

const Nav = () => {
  return (
    <>
      <SideNav items={items} />
      <TopNav items={items} />
    </>
  );
};

export default Nav;
