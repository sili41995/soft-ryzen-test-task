import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import { Copyright, Footer, Header, Main } from './SharedLayout.styled';
import Container from '@/components/Container';

const SharedLayout: FC = () => (
  <>
    <Header>
      <Container>
        <></>
      </Container>
    </Header>
    <Main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Main>
    <Footer>
      <Container>
        <Copyright>© Yacht ape 2024 all rights reserved</Copyright>
      </Container>
    </Footer>
  </>
);

export default SharedLayout;
