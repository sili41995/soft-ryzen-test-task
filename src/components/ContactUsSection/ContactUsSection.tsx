import { FC } from 'react';
import HiddenSectionTitle from '../HiddenSectionTitle';
import FakeSectionTitle from '../FakeSectionTitle';
import { IoMdClose } from 'react-icons/io';
import ContactUsForm from '../ContactUsForm';
import { FormWpar, Section, Text } from './ContactUsSection.styled';
import Container from '@/components/Container';
import { IProps } from './ContactUsSection.types';

const ContactUsSection: FC<IProps> = ({ sectionRef }) => {
  return (
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
};

export default ContactUsSection;
