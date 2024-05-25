import { Col, Grid3, RowCenter } from '@/components';
import { H2, Link, P14 } from '@/components/Texts';
import { useTranslation } from 'next-i18next';
import React from 'react';
import tw from 'tailwind-styled-components';
import { NavKeys } from '../Navbar';
import { Mail, Phone, User } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps): React.JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Main className={className} id={NavKeys.CONTACT}>
      <H2>{t(`enums:${NavKeys.CONTACT}`)}</H2>
      <Grid3 className='mt-10 w-auto md:gap-10'>
        <RowCenter className='gap-3'>
          <User size={25} />
          <Col>
            <P14>{'PHILIPPE Bernadette'}</P14>
            <P14>{'LANSONNEUR Muriel'}</P14>
          </Col>
        </RowCenter>
        <a href='mailto:nadmuriel@yahoo.fr'>
          <RowCenter className='gap-3'>
            <Mail size={25} />
            <Col>
              <P14>{'nadmuriel@yahoo.fr'}</P14>
            </Col>
          </RowCenter>
        </a>
        <RowCenter className='gap-3'>
          <Phone size={25} />
          <Col>
            <a href='tel:0663001370'>
              <P14>{'06 63 00 13 70'}</P14>
            </a>
            <a href='tel:0626856266'>
              <P14>{'06 26 85 62 66'}</P14>
            </a>
          </Col>
        </RowCenter>
      </Grid3>
      <RowCenter className='gap-1 items-center mb-3 mt-30'>
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
