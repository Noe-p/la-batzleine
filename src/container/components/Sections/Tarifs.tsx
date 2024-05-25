import { ColCenter, Grid4, H2, P14, P16 } from '@/components';
import tw from 'tailwind-styled-components';
import { NavKeys } from '../Navbar';
import { useTranslation } from 'next-i18next';

export function Tarifs(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Main id={NavKeys.TARIFS}>
      <H2>{t(`enums:${NavKeys.TARIFS}`)}</H2>
      <RowStyled>
        <ColCenter className='md:gap-2'>
          <P16 className='font-semibold text-primary-foreground'>
            {'Semaine (meublé) :'}
          </P16>
          <P14 className='text-primary-foreground'>
            {'de 700,00€ à 950,00€ (CC)'}
          </P14>
        </ColCenter>
        <ColCenter className='md:gap-2'>
          <P16 className='font-semibold text-primary-foreground'>
            {'Semaine Juillet/Aout :'}
          </P16>
          <P14 className='text-primary-foreground'>{'950,00 € (CC)'}</P14>
        </ColCenter>
        <ColCenter className='md:gap-2'>
          <P16 className='font-semibold text-primary-foreground'>
            {'Semaine Juin/Septembre :'}
          </P16>
          <P14 className='text-primary-foreground'>{'800,00 € (CC)'}</P14>
        </ColCenter>
        <ColCenter className='md:gap-2'>
          <P16 className='font-semibold text-primary-foreground'>
            {'Semaine Hors Saison :'}
          </P16>
          <P14 className='text-primary-foreground'>{'700,00 €'}</P14>
        </ColCenter>
      </RowStyled>
    </Main>
  );
}

const Main = tw(ColCenter)`
  mt-20
`;

const RowStyled = tw(Grid4)`
  bg-primary
  p-8
  rounded-lg
  shadow-lg
  w-full
  mt-10
`;
