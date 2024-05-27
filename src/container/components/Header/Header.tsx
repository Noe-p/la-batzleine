import { H1, P18 } from '@/components/Texts';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { NavKeys } from '../Navbar';
import { JARDIN } from '@/data';
import { Image } from '@/components';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps): React.JSX.Element {
  const { className } = props;
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);
  }, []);

  return (
    <Main id={NavKeys.HOME} className={className}>
      <Filter />
      <ImageBackground>
        <Image {...JARDIN[0]} />
      </ImageBackground>
      <Title $isAnimated={isAnimated}>{t('enums:HOME')}</Title>
      <SubTitle $isAnimated={isAnimated}>{t('header.subTitle')}</SubTitle>
    </Main>
  );
}

const Main = tw.div`
  flex
  flex-col
  items-center
  justify-center
  h-screen
  w-screen
  z-0
`;
const Filter = tw.div`
  absolute
  top-0
  left-0
  bottom-0
  right-0
  w-full
  h-full
  z-10
  contrast-50
  bg-primary/30
`;

const ImageBackground = tw.div`
  top-0
  left-0
  right-0
  bottom-0
  w-full
  h-full
  z-0
  bg-fixed
  bg-center
  absolute
`;

const Title = tw(H1)<{ $isAnimated: boolean }>`
  text-white
  text-4xl
  lg:text-[150px]
  md:text-[100px]
  text-[80px]
  text-center
  transform
  transition-all
  duration-1000
  delay-100
  ease-in-out
  ${(props) => (props.$isAnimated ? 'translate-y-0' : '-translate-y-50')}
  ${(props) => (props.$isAnimated ? 'opacity-100' : 'opacity-0')}
  line-height-1
  z-20
  tangerine-bold 
  normal-case	
  drop-shadow-md	
`;

const SubTitle = tw(P18)<{ $isAnimated: boolean }>`
  text-white
  text-center
  transform
  transition-all
  duration-1000
  delay-100
  ease-in-out
  ${(props) => (props.$isAnimated ? 'translate-y-0' : '-translate-y-40')}
  ${(props) => (props.$isAnimated ? 'opacity-100' : 'opacity-0')}
  line-height-1
  z-20
  rounded-lg
  drop-shadow-lg
`;
