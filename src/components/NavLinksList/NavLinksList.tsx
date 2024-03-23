import { FC } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from './NavLinksList.styled';
import { IProps } from './NavLinksList.types';

const NavLinksList: FC<IProps> = ({ navLinks, scrollingOccurred }) => (
  <List>
    {navLinks.map(({ icon: Icon, path }, index) => (
      <ListItem key={index} scrollingOccurred={scrollingOccurred}>
        <Link to={path}>
          <Icon />
        </Link>
      </ListItem>
    ))}
  </List>
);

export default NavLinksList;
