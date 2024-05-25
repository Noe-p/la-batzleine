import tw from 'tailwind-styled-components';
import { ColCenter, H2, Image, P18 } from '@/components';
import { Trans, useTranslation } from 'next-i18next';
import { NavKeys } from '../Navbar';

export function Carte(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Main id={NavKeys.CARTE}>
      <H2 className='text-white'>{t('carte.title')}</H2>
      <MapStyled src='/images/carte.webP' alt='map' />
      <P18 className='mt-5 text-center text-white'>
        <Trans i18nKey='carte.address' components={{ br: <br /> }} />
      </P18>
      <img
        className='hidden bateau sm:block'
        src='/images/bateau.webP'
        alt='bateau'
      />
    </Main>
  );
}

const Main = tw(ColCenter)`
  py-20
  justify-center
  items-center
  bg-gradient-to-b from-primary to-primary/90
  rounded-lg
`;

const MapStyled = tw(Image)`
  w-full
  h-full

`;
