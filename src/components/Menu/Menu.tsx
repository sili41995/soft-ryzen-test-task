import { FC } from 'react';
import { Container, ListItem, MenuBtn, NavLinksList } from './Menu.styled';
import { Link } from 'react-router-dom';
import { IProps } from './Menu.types';

const Menu: FC<IProps> = ({
  scrollingOccurred,
  onMenuBtnClick,
  showMobileMenu,
  navLinks,
  sectionIds,
}) => {
  const menuBtnTitle = showMobileMenu ? 'CLOSE' : 'MENU';

  return (
    <Container>
      {showMobileMenu && (
        <ul>
          {sectionIds.map(({ id, title }) => (
            <li key={id}>
              <Link to={`#${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
      <MenuBtn
        onClick={onMenuBtnClick}
        scrollingOccurred={scrollingOccurred}
        showMobileMenu={showMobileMenu}
      >
        {menuBtnTitle}
      </MenuBtn>
      <NavLinksList>
        {navLinks.map(({ icon: Icon, path }, index) => (
          <ListItem key={index} scrollingOccurred={scrollingOccurred}>
            <Link to={path}>
              <Icon />
            </Link>
          </ListItem>
        ))}
      </NavLinksList>
    </Container>
  );
};

export default Menu;
