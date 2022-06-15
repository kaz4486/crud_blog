import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import clsx from 'clsx';

const NavBar = () => {
  return (
    <Navbar
      bg='primary'
      variant='dark'
      expand='lg'
      className={clsx(styles.navbar, 'justify-content-between', 'rounded')}
    >
      <NavbarBrand as={NavLink} to='/' className={styles.navbrand}>
        Blog.app
      </NavbarBrand>
      <Nav className={styles.navlinks}>
        <Nav.Link as={NavLink} to='/'>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to='/about'>
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
