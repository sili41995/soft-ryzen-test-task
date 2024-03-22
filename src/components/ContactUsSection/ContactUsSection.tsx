import { FC } from 'react';
import HiddenSectionTitle from '../HiddenSectionTitle';
import FakeSectionTitle from '../FakeSectionTitle';
import { IoMdClose } from 'react-icons/io';
import ContactUsForm from '../ContactUsForm';
import { Container, Section, Text } from './ContactUsSection.styled';

const ContactUsSection: FC = () => {
  return (
    <Section>
      <HiddenSectionTitle title='Contact Us' />
      <FakeSectionTitle title='Are you in?' />
      <Container>
        <IoMdClose size={36} />
        <Text>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </Text>
        <ContactUsForm />
      </Container>
    </Section>
  );
};

export default ContactUsSection;
