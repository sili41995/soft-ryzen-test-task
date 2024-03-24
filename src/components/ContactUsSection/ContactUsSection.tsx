import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import HiddenSectionTitle from '@/components/HiddenSectionTitle';
import FakeSectionTitle from '@/components/FakeSectionTitle';
import ContactUsForm from '@/components/ContactUsForm';
import Container from '@/components/Container';
import { IProps } from './ContactUsSection.types';
import { FormWpar, Section, Text } from './ContactUsSection.styled';

const ContactUsSection: FC<IProps> = ({ sectionRef }) => (
  <Section ref={sectionRef}>
    <Container>
      <HiddenSectionTitle title='Contact Us' />
      <FakeSectionTitle title='Are you in?' />
      <FormWpar>
        <IoMdClose size={36} />
        <Text>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </Text>
        <ContactUsForm />
      </FormWpar>
    </Container>
  </Section>
);

export default ContactUsSection;
