import { FC, useEffect } from 'react';
import { IProps } from './BurgerMenu.types';
import {
  Backdrop,
  Button,
  Container,
  Copyright,
  List,
  ListItem,
} from './BurgerMenu.styled';

const BurgerMenu: FC<IProps> = ({ burgerMenuControls, scrollingOccurred }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Backdrop>
      <Container>
        <List>
          {burgerMenuControls.map(({ onClick, title }) => (
            <ListItem key={title}>
              <Button
                type='button'
                onClick={onClick}
                scrollingOccurred={scrollingOccurred}
              >
                {title}
              </Button>
            </ListItem>
          ))}
        </List>
        <Copyright>© Yacht ape 2024 all rights reserved</Copyright>
      </Container>
    </Backdrop>
  );
};

export default BurgerMenu;
