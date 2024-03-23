import { FC } from 'react';
import { Container, Menu, MenuBtn, Nav, StyledHeader } from './Header.styled';
import { Link } from 'react-router-dom';
import { PagePaths } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import Logomark from '@/icons/logomark.svg?react';
import X from '@/icons/x.svg?react';
import { FaDiscord } from 'react-icons/fa';
import { NavLinks } from '@/types/types';

const Header: FC = () => {
  const navLinks: NavLinks = [
    { path: PagePaths.homePath, icon: <FaDiscord /> },
    { path: PagePaths.homePath, icon: <Logomark /> },
    { path: PagePaths.homePath, icon: <X /> },
  ];

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Link to={PagePaths.homePath}>
            <Logo />
          </Link>
        </Nav>
        <Menu>
          <MenuBtn>MENU</MenuBtn>
          {navLinks.map(({ icon, path }, index) => (
            <Link to={path} key={index}>
              {icon}
            </Link>
          ))}
        </Menu>
      </Container>
    </StyledHeader>
  );
};

export default Header;
