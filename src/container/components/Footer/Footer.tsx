import { Col, RowCenter } from '@/components';
import { H2, Link, P12, P14, Title } from '@/components/Texts';
import { useTranslation } from 'next-i18next';
import React from 'react';
import tw from 'tailwind-styled-components';
import { NavKeys } from '../Navbar';
import { Mail, Phone } from 'lucide-react';
import { MEDIA_QUERIES } from '@/static/constants';
import { useMediaQuery } from 'usehooks-ts';

interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps): React.JSX.Element {
  const { className } = props;
  const { t } = useTranslation();
  const isMobile = useMediaQuery(MEDIA_QUERIES.SM);

  return (
    <Main className={className} id={NavKeys.CONTACT}>
      <H2 className='md:mb-5'>{t(`enums:${NavKeys.CONTACT}`)}</H2>
      <ContactRow target='_blank' href='mailto:nadmuriel@yahoo.fr'>
        <Col>
          <Title className='text-primary'>{t('generics.email')}</Title>
          <P12 className='text-primary'>{'nadmuriel@yahoo.fr'}</P12>
        </Col>
        <Mail size={isMobile ? 30 : 45} className='md:group-hover:text-red' />
      </ContactRow>
      <ContactRow target='_blank' href='tel:0663001370'>
        <Col>
          <Title className='text-primary'>{t('generics.phone')}</Title>
          <P12 className='text-primary'>{'06 63 00 13 70'}</P12>
        </Col>
        <Phone size={isMobile ? 30 : 45} className='md:group-hover:text-red' />
      </ContactRow>
      <RowCenter className='gap-1 items-center mb-1 mt-30'>
        <CopyRight className='w-fit'>{t('generics.designed')}</CopyRight>
        <LinkStyled href='https://noe-philippe.com' target='_blank'>
          {'Noé PHILIPPE'}
        </LinkStyled>
      </RowCenter>
      <CopyRight className='  mb-5'>{t('generics.copyright')}</CopyRight>
    </Main>
  );
}

const Main = tw.div`
  flex
  items-center
  w-full
  flex-col
  mt-20
`;

const CopyRight = tw(P14)`
  text-center
  w-3/4
`;

const LinkStyled = tw(Link)`
  font-semibold
`;

const ContactRow = tw(Link)`
  flex
  items-center
  justify-between
  w-full
  border-b
  first:border-t
  py-5
  px-3
  group
  transition-all
  duration-300
  md:hover:bg-primary/10
  rounded
`;
