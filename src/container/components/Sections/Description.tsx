import tw from 'tailwind-styled-components';
import { NavKeys } from '../Navbar';
import { Image, Grid2, H2, P14 } from '@/components';
import { useTranslation } from 'next-i18next';
import { JARDIN } from '@/data';

export function Description(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Main id={NavKeys.DESCRIPTION}>
      <TextContainer>
        <H2>{t(`enums:${NavKeys.DESCRIPTION}`)}</H2>
        <P14 className='mt-5 leading-snug'>{t('description.content1')}</P14>
        <P14 className='mt-3 leading-snug'>{t('description.content2')}</P14>
        <P14 className='mt-3 leading-snug'>{t('description.content3')}</P14>
      </TextContainer>
      <Image {...JARDIN[1]} />
    </Main>
  );
}

const Main = tw(Grid2)`
  md:gap-15
  md:pt-20
  -translate-y-20 md:translate-y-0
  justify-center
  items-center
`;

const TextContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  h-full
  w-full
  md:border
  border-primary
  md:p-10
  rounded
  h-fit
`;
