import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import { Header, Main } from './SharedLayout.styled';
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
  </>
);

export default SharedLayout;
