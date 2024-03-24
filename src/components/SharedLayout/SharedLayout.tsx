import { FC, Suspense, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import { Copyright, Footer, Main } from './SharedLayout.styled';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { ISectionRefs } from '@/types/types';

const SharedLayout: FC = () => {
  const contactUsSectionRef = useRef<HTMLElement>(null);
  const artsSectionRef = useRef<HTMLElement>(null);
  const faqSectionRef = useRef<HTMLElement>(null);
  const mindMapSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const sectionRefs: ISectionRefs = {
    contactUsSectionRef,
    artsSectionRef,
    faqSectionRef,
    mindMapSectionRef,
    aboutSectionRef,
  };

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
