import { useTranslation } from 'next-i18next';
import React from 'react';
import styled from 'styled-components';
import { Navbar, Title } from '../../components';
import { colors } from '../../themes';
import { HomeHeader } from '../components';

export function HomePage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Main>
      <Navbar />
      <HomeHeader>
        <Title color={colors.black}>{t('La Batzleine')}</Title>
      </HomeHeader>
    </Main>
  );
}

const Main = styled.div`
  z-index: 0;
`;
