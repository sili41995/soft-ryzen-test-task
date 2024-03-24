import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { useSectionRefs } from '@/hooks';
import { Copyright, Footer, Main } from './SharedLayout.styled';

const SharedLayout: FC = () => {
  const sectionRefs = useSectionRefs();

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet context={sectionRefs} />
        </Suspense>
      </Main>
      <Footer>
        <Container>
          <Copyright>© Yacht ape 2024 all rights reserved</Copyright>
        </Container>
      </Footer>
    </>
  );
};

export default SharedLayout;
